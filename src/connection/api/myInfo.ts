import httpRequest from "../axios";
import { PasswordRequest } from "../../interface/Login";

export const changePassword = (password: PasswordRequest) => {
  return httpRequest.patch("api/users/password", password);
};
