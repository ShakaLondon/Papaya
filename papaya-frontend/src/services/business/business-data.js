
import api from "../api.js";

const getPublicBusiness = (businessName) => {
  return api.get("business/" + businessName);
};

const getBusinessReviews = (businessName) => {
  return api.get(`business/${businessName}/reviews/averages`);
};

const businessData = {
  getPublicBusiness,
  getBusinessReviews,
};

export default businessData;
