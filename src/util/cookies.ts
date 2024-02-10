import { Cookies } from "react-cookie";
import { Cookie, CookieSetOptions } from "universal-cookie";

type CookieValue = string | object | number;
const cookies = new Cookies();

export const getCookie = <T = CookieValue>(name: string): T | undefined => {
  try {
    const cookie = cookies.get(name);
    return cookie as T;
  } catch (error) {
    console.error("Error getting cookie:", error);
    return undefined;
  }
};

export const setCookie = (name: string, value: CookieValue, options?: CookieSetOptions): void => {
  try {
    cookies.set(name, value, options);
  } catch (error) {
    console.error("Error setting cookie:", error);
  }
};

export const removeCookie = (name: string, options?: CookieSetOptions): void => {
  try {
    cookies.remove(name, options);
  } catch (error) {
    console.error("Error remove cookie:", error);
  }
};
