import { SignUpRequest, UserDetails } from "interface/User";
import httpRequest from "../axios";

function getUserDetails() {
  return httpRequest.get<UserDetails>("/api/users/details");
}

function postUsers(data: SignUpRequest) {
  return httpRequest.post("/api/users", data);
}

export const users = {
  getDetails: getUserDetails,
  post: postUsers,
};
