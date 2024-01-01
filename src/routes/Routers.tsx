import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import SignIn from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
