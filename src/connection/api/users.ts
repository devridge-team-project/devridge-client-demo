import { SignUpRequest, UserDetails } from "interface/User";
import httpRequest from "../axios";

const api = httpRequest.server;

function getUserDetails() {
  return api.get<UserDetails>("/api/users/details");
}

function postUsers(data: SignUpRequest) {
  return api.post("/api/users", data);
}

function postUsersV2(data: FormData) {
  return api.postMultipart("/api/users", data);
}

function patchUsers(data: FormData) {
  return api.patchMultipart("/api/users", data);
}

export const users = {
  getDetails: getUserDetails,
  post: postUsersV2,
  patch: patchUsers,
};
