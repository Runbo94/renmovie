import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  )
    return Promise.reject(error);
  logger.log("Logging the error", error);
  toast.error("An unexpected error occurred.");
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
