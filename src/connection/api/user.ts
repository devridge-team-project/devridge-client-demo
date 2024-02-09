import { SignUpRequest } from "interface/User";
import httpRequest from "../axios";

function postUser(data: SignUpRequest) {
  return httpRequest.post("/api/users", data);
}

export const user = {
  post: postUser,
};
