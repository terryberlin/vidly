import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(users) {
  return http.post(apiEndpoint, {
    email: users.username,
    password: users.password,
    name: users.name
  });
}
