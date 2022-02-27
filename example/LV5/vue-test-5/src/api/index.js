import axios from "axios";

export const gitHubRequest = axios.create({
  baseURL: "https://api.github.com/",
});

export const getUserData = (name) => gitHubRequest.get(`/users/${name}`);
