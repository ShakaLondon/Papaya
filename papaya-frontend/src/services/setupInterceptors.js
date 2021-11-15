import axiosInstance from "./api";
import TokenService from "./tokenService";
import { logoutAction, refreshToken } from "../redux/actions/auth.js";

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

      if ((originalConfig.url !== "/users/me" || originalConfig.url !== "/users/business/me") && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post("/auth/refreshtoken", {
              refreshToken: TokenService.getLocalRefreshToken(),
            });

            const { accessToken } = rs.data;

            dispatch(refreshToken(accessToken));
            TokenService.updateLocalAccessToken(accessToken);

            console.log(accessToken + "Interceptor")

            return axiosInstance(originalConfig);
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