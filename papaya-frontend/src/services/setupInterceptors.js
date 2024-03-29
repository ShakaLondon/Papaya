import axiosInstance from "./api";
import TokenService from "./tokenService";
import { logoutAction, refreshToken } from "../redux/actions/auth.js";
// import { useHistory } from 'react-router'
// import { Redirect } from 'react-router-dom'


const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();

      if (token) {
        config.headers["authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (
        (originalConfig.url !== "/users/register" ||
          originalConfig.url !== "/users/business/register") &&
        err.response
      ) {
        // Access Token was expired
        if (err.response.status === 403 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post("/auth/refreshtoken", {
              refreshToken: TokenService.getLocalRefreshToken(),
            });

            const { accessToken } = rs.data;

            dispatch(refreshToken(accessToken));
            TokenService.updateLocalAccessToken(accessToken);

            console.log(accessToken, "Interceptor");

            return axiosInstance(originalConfig);
          } catch (err) {
            //  dispatch(logoutAction())

            return Promise.reject(err);
          }
        } else 
        if (err.response.status === 403) 
        {
          try {
            dispatch(logoutAction());
            TokenService.removeUser();

            // const history = useHistory()
            // history.push('/login')

            // window.location.replace = '/login'

            // <Redirect to="/somewhere/else" />


            return Promise.reject(err);
          } catch (err) {
            //  dispatch(logoutAction())

            return Promise.reject(err);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
