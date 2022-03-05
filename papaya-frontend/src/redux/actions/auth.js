import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOADING,
  ERROR,
  REFRESH_TOKEN,
  USER_REFRESH
  // REDIRECT
} from "./types.js";

import UserAuth from "../../services/user/user-auth.js";
import BusinessUserAuth from "../../services/business/business-auth.js";

// REFRESH TOKEN

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};

// AUTH USER

export const registerAction = (userObject) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      dispatch({
        type: ERROR,
        payload: false,
      });

      UserAuth.register(userObject).then(
        (response) => {
          console.log(response, "authfile");

          dispatch({
            type: REGISTER_SUCCESS,
            payload: { user: response.user },
          });

          dispatch({
            type: ERROR,
            payload: false,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: REGISTER_FAIL,
          });

          UserAuth.logout()

          dispatch({
            type: ERROR,
            payload: message,
          });

          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.reject();
        }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: false,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};

export const loginAction = (email, password) => {
  return (dispatch) => {
    console.log(`${email}, ${password}`);
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      dispatch({
        type: ERROR,
        payload: false,
      });
      console.log(`${email}, ${password}` + 2);
      UserAuth.login(email, password).then(
        (data) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data.user },
          });

          dispatch({
            type: ERROR,
            payload: false,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: LOGIN_FAIL,
          });

          dispatch({
            type: ERROR,
            payload: message,
          });

          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.reject();
        }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: false,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};

export const logoutAction = () => (dispatch) => {
  UserAuth.logout();

  dispatch({
    type: LOGOUT,
  });
};

// export const redirectAction = () => (link, dispatch) => {
//   // UserAuth.logout();

//   dispatch({
//     type: REDIRECT,
//     payload: link,
//   });
// };

// AUTH BUSINESS USER

export const registerBusinessUserAction = (userObject) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      dispatch({
        type: ERROR,
        payload: false,
      });

      BusinessUserAuth.register(userObject).then(
        (response) => {
          dispatch({
            type: REGISTER_SUCCESS,
          });

          dispatch({
            type: ERROR,
            payload: false,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: REGISTER_FAIL,
          });

          dispatch({
            type: ERROR,
            payload: message,
          });

          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.reject();
        }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: false,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};

export const loginBusinessUserAction = (email, password) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      dispatch({
        type: ERROR,
        payload: false,
      });

      BusinessUserAuth.login(email, password).then(
        (data) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data.user },
          });

          dispatch({
            type: ERROR,
            payload: false,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: LOGIN_FAIL,
          });

          dispatch({
            type: ERROR,
            payload: message,
          });

          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.reject();
        }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: false,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};

export const logoutBusinessUserAction = () => (dispatch) => {
  BusinessUserAuth.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const refreshUserAction = (userName) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      dispatch({
        type: ERROR,
        payload: false,
      });

      UserAuth.userRefresh(userName).then(
        (response) => {
          console.log(response, "userobject");

          dispatch({
            type: USER_REFRESH,
            payload: { user: response.data },
          });

          dispatch({
            type: ERROR,
            payload: false,
          });
          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: LOGOUT,
          });

          dispatch({
            type: ERROR,
            payload: message,
          });

          dispatch({
            type: LOADING,
            payload: false,
          });

          return Promise.reject();
        }
      );
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: false,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};
