import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import SignIn from "../components/sign-in/SignIn";
import SignUpPage from "../components/sign-up/Page";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
