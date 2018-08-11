import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(`${config.apiEndpoint}/movies`);
}

export function deleteMovie(movieId) {
  return http.delete(`${config.apiEndpoint}/movies/${movieId}`);
}
