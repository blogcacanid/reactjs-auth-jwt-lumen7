import axios from "axios";

// For Lumen 7 back-end
const API_URL = "http://localhost:8000/api/test/";
// for Node.js Express back-end
// const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export default {
  getPublicContent,
};