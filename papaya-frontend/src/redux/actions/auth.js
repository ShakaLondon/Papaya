import {  
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOADING,
  ERROR, 
  REFRESH_TOKEN
} from './types.js'


import UserAuth from "../../services/user/user-auth.js";
import BusinessUserAuth from "../../services/business/business-auth.js";

// REFRESH TOKEN

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  })
}

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
          console.log(response, "authfile")

          dispatch({
            type: REGISTER_SUCCESS,
            payload: { user: response.user }
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
        }, (error) => {
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
            payload: true,
          });

          dispatch({
            type: LOADING,
            payload: false,
          });
    
          return Promise.reject();
        })

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
}};

export const loginAction = (email, password) => {
  return (dispatch) => {

    console.log(`${email}, ${password}`)
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      dispatch({
        type: ERROR,
        payload: false,
      });
      console.log(`${email}, ${password}` + 2)
      UserAuth.login(email, password).then(
        (data) => {
          
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data.user }
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
        }, (error) => {
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
            payload: true,
          });
          
          dispatch({
            type: LOADING,
            payload: false,
          });
    
          return Promise.reject();
        })

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
}};

export const logoutAction = () => (dispatch) => {
  UserAuth.logout();

  dispatch({
    type: LOGOUT,
  });
};

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
          }, (error) => {
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
              payload: true,
            });
  
            dispatch({
              type: LOADING,
              payload: false,
            });
      
            return Promise.reject();
          })
  
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
  }};
  
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
              payload: { user: data.user }
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
          }, (error) => {
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
              payload: true,
            });
            
            dispatch({
              type: LOADING,
              payload: false,
            });
      
            return Promise.reject();
          })
  
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
  }};
  
  export const logoutBusinessUserAction = () => (dispatch) => {
    BusinessUserAuth.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };



