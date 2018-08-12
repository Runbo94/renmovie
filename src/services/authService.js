import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/auth";

export async function login(email, password) {
  const { data: jwt } = await http.post(api, { email, password });
  localStorage.setItem("token", jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt
};
