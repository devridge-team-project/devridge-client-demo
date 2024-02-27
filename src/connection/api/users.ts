import { SignUpRequest, UserDetails } from "interface/User";
import httpRequest from "../axios";

const api = httpRequest.server;

function getUserDetails() {
  return api.get<UserDetails>("/api/users/details");
}

function postUsers(data: SignUpRequest) {
  return api.post("/api/users", data);
}

export const users = {
  getDetails: getUserDetails,
  post: postUsers,
};
