import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REFRESH_TOKEN,
  UPDATE_USER,
  UPDATE_AVATAR,
  UPDATE_COVER,
  USER_REFRESH
} from "../actions/types.js";
import initialState from "../initialState";

// const user = JSON.parse(localStorage.getItem("user"));

// const isLoggedIn = user ? true : false;

const authReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
        isLoggedIn: true,
        userFound: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userFound: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...action.payload.user,
        isLoggedIn: true,
        userFound: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userFound: null,
      };
    case LOGOUT:
      return {
        _id: "",
        name: "",
        surname: "",
        username: "",
        dateOfBirth: "",
        email: "",
        avatar: "",
        role: "",
        reviews: [],
        isLoggedIn: false,
        userFound: false,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };

    // USER FUNCTIONS

    case USER_REFRESH:
      return {
        ...action.payload.user,
        isLoggedIn: true,
        userFound: true,
      };
      
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload.user,
        isLoggedIn: true,
        userFound: true,
      };

    case UPDATE_AVATAR:
      return {
        ...state,
        ...action.payload.user,
        isLoggedIn: true,
        userFound: true,
      };

    case UPDATE_COVER:
      return {
        ...state,
        ...action.payload.user,
        isLoggedIn: true,
        userFound: true,
      };
    default:
      return state;
  }
};

export default authReducer;
