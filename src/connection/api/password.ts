import httpRequest from "../axios";

const api = httpRequest.server;

export const changePassword = (password: string) => {
  return api.patch("api/users/password", { password });
};

export const resetPassword = (password: string, email: string, tempJwt: string) => {
  return api.patch("api/users/reset-password", { password, email, tempJwt });
};
