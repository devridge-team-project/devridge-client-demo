import { Route, Routes } from "react-router-dom";
import HomePage from "./home/Page";
import SignInPage from "./sign-in/Page";
import HelpPwPage from "./help-pw/Page";
import SignUp from "./sign-up/view/SignUp";
import Join from "./sign-up/view/Join";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/help-pw" element={<HelpPwPage />} />
      <Route path="/sign-up">
        <Route index element={<SignUp />} />
        <Route path="join" element={<Join />} />
        <Route path="success" element={<div>SUCCESS</div>} />
      </Route>
    </Routes>
  );
}
