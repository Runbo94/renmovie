import http from "./httpService";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/auth";

export function login(email, password) {
  return http.post(api, { email, password });
}
