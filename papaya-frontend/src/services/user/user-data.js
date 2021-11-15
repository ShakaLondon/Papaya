import axios from "axios";
import authHeader from "../header.js";
import api from "../api.js"

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getUserReviews = () => {
  return api.get("users/me/reviews", { headers: authHeader() });
};

const editUser = (userUpdate) => {
  return api.put("users/me/update", userUpdate, { headers: authHeader() });
};

const editAvatar = (userUpdateImage) => {
  return api.post("image/upload/avatar", userUpdateImage, { headers: authHeader() });
};

const editCover = (userUpdateCover) => {
  return api.post("image/upload/cover", userUpdateCover, { headers: authHeader() });
};

const editUserReview = (reviewID) => {
  return api.put(`users/me/reviews/${reviewID}`, { headers: authHeader() });
};

const deleteUserReview = (reviewID) => {
    return api.delete(`users/me/reviews/${reviewID}`, { headers: authHeader() });
  };

const UserReviewforBusiness = (businessID) => {
  return api.post(`users/me/reviews/business/${businessID}`, { headers: authHeader() });
};

export default {
  getUserReviews,
  editUserReview,
  deleteUserReview,
  UserReviewforBusiness,
  editUser,
  editAvatar,
  editCover
};