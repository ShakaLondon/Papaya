import axios from "axios";
import authHeader from "./header.js";
import api from "../api.js"


const getBusinessReviews = () => {
  return api.get("/users/business/reviews");
};

const editBusinessReview = (reviewID) => {
  return api.put(`/users/business/reviews/${reviewID}`);
};

export default {
  getBusinessReviews,
  editBusinessReview,
};