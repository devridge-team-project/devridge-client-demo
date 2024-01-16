import { Route } from "interface/Route";
import SignUp from "components/sign-up/view/SignUp";
import Join from "components/sign-up/view/Join";

export const signUpRoutes: Route[] = [
  ["/sign-up", <SignUp />],
  ["/sign-up/join", <Join />],
  ["/sign-up/success", <div>success</div>],
];
