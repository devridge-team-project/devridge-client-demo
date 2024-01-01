import { Routes, Route } from "react-router-dom";
import { Kakao, GitHub, Google } from "components/auth/Callback";
import Home from "../components/home/Page";
import SignIn from "../components/sign-in/Page";
import SignUpPage from "../components/sign-up/Page";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/auth/callback/kakao" element={<Kakao />} />
      <Route path="/auth/callback/github" element={<GitHub />} />
      <Route path="/auth/callback/google" element={<Google />} />
    </Routes>
  );
}
