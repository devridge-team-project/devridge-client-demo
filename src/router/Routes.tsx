import { Home, Join, Qna, SignIn, SignUp, Success } from "components";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      {/* <Route path="/help-pw" element={<Help />} /> */}
      <Route path="/sign-up">
        <Route index element={<SignUp />} />
        <Route path="join" element={<Join />} />
        <Route path="success" element={<Success />} />
      </Route>
      <Route path="qna" element={<Qna />} />
    </Routes>
  );
}
