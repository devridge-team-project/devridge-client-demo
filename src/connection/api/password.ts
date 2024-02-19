import httpRequest from "../axios";

export const changePassword = (password: string) => {
  return httpRequest.patch("api/users/password", { password });
};

export const resetPassword = (password: string, email: string, tempJwt: string) => {
  return httpRequest.patch("api/users/reset-password", { password, email, tempJwt });
};
