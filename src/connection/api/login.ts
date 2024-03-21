import axios, { AxiosError } from "axios";
import { setCookie, removeCookie } from "util/cookies";
import { LoginRequest, LoginResponse } from "../../interface/Login";
import httpRequest from "../axios";

const api = httpRequest.server;
export const login = ({ email, password }: LoginRequest) => {
  return api.post<LoginRequest, LoginResponse>("api/login", { email, password });
};

export const deleteAccount = (password: string) => {
  return api.delete("api/users", { data: { password } });
};

export const refresh = () => {
  return api.get<LoginResponse>("api/auth/accessToken");
};

export const logout = () => {
  return api.post("api/logout");
};
