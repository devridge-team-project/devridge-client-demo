import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/sign-in/SignIn";
import SignUp from "../components/sign-up/SignUp";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
