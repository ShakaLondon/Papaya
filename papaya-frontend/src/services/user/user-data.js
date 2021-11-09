import axios from "axios";
import authHeader from "./header.js";

const API_URL = "http://localhost:8080/users/me/";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getUserReviews = () => {
  return axios.get(API_URL + "reviews", { headers: authHeader() });
};

const editUserReview = (reviewID) => {
  return axios.put(API_URL + `reviews/${reviewID}`, { headers: authHeader() });
};

const deleteUserReview = (reviewID) => {
    return axios.delete(API_URL + `reviews/${reviewID}`, { headers: authHeader() });
  };

const UserReviewforBusiness = () => {
  return axios.post(API_URL + `reviews/business/${businessID}`, { headers: authHeader() });
};

export default {
  getUserReviews,
  editUserReview,
  deleteUserReview,
  UserReviewforBusiness,
};