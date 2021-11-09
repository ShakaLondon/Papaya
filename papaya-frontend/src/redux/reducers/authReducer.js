import { 
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOADING,
  ERROR,
  REFRESH_TOKEN, 
} from '../actions/types.js';
import initialState from '../initialState';

const user = JSON.parse(localStorage.getItem("user"));

const isLoggedIn = user
  ? true
  : false

const authReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
          isLoggedIn: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
          isLoggedIn: false,
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
        userFound: null
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userFound: false,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
        };
    default:
      return state;
  }
};

export default authReducer;
