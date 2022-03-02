
import api from "../api.js";

const getCategory = (catRequest) => {
  return api.get("category/" + catRequest);
};

const getAllCategories = () => {
    return api.get("category?limit=3&columns=8");
  };

const getAllReviews = () => {
    return api.get("reviews");
  };


const appData = {
    getCategory,
    getAllCategories,
    getAllReviews,
};

export default appData