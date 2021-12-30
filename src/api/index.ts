import axios from "axios";

const baseURL = process.env.VUE_APP_API_URI;

export default axios.create({
  baseURL,
});
