import {  
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOADING,
    ERROR, 
    REFRESH_TOKEN,
    UPDATE_USER,
    UPDATE_AVATAR,
    UPDATE_COVER
  } from './types.js'
  
  
  import UserData from "../../services/user/user-data.js";
  
  export const updateUserAction = (userObject) => {
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
  
        UserData.editUser(userObject)
        // .then(data => {return JSON.stringify(data)})
        .then(
          (response) => { 

            // const userdata = JSON.stringify(response)
            const data = response

            // console.log(userdata, data)

            
  
            dispatch({
              type: UPDATE_USER,
              payload: { user: data.data }
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

              console.log(message)
              console.log(error.response)


              if (error.response.status === 401){
                dispatch({
                  type: LOGOUT,
                  // payload: true,
                });
              }


      
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

  export const updateUserImageAction = (ImageForm) => {
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
  
        UserData.editAvatar(ImageForm)
        // .then(data => {return JSON.stringify(data)})
        .then(
          (response) => { 

            // const userdata = JSON.stringify(response)
            const data = response

            console.log(response)

            
  
            dispatch({
              type: UPDATE_AVATAR,
              payload: { user: data.data }
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

              console.log(message)
              console.log(error.response)


              if (error.response?.status === 401){
                dispatch({
                  type: LOGOUT,
                  // payload: true,
                });
              }


      
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
  
  export const updateUserCoverAction = (CoverForm) => {
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
  
        UserData.editCover(CoverForm)
        // .then(data => {return JSON.stringify(data)})
        .then(
          (response) => { 

            // const userdata = JSON.stringify(response)
            const data = response

            console.log(response)

            
  
            dispatch({
              type: UPDATE_COVER,
              payload: { user: data.data }
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

              console.log(message)
              console.log(error.response)


              if (error.response?.status === 401){
                dispatch({
                  type: LOGOUT,
                  // payload: true,
                });
              }


      
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