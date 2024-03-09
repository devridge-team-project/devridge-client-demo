import { getCookie } from "./cookies";
export default function isSignIn() {
  if (getCookie("accessToken")) {
    return true;
  }
  return false;
}
