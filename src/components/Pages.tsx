import { Route, Routes } from "react-router-dom";
import HomePage from "./home/Page";
import SignInPage from "./sign-in/Page";
import { signUpRoutes } from "./sign-up/controller/Routes";

export default function Pages() {
  const routers = [...signUpRoutes];

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      {routers.map(([path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
