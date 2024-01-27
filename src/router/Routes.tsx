import { Home, Join, Qna, SignIn, SignUp, Success } from "components";
import { Route, Routes } from "react-router-dom";

import HelpPwPage from "components/help-pw/Page";
import MyAccountPage from "components/myAccount/myAccountPage";
import DeleteAccountPage from "components/myAccount/deleteAccountPage";
import UpdateAccountPage from "components/myAccount/updateAccountPage";
import ChangePasswordPage from "components/myAccount/changePasswordPage";
import QuestionPage from "components/myAccount/questionPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/help-pw" element={<HelpPwPage />} />
      <Route path="/mypage" element={<MyAccountPage />} />
      <Route path="/delete-account" element={<DeleteAccountPage />} />
      <Route path="/update-account" element={<UpdateAccountPage />} />
      <Route path="/change-pw" element={<ChangePasswordPage />} />
      <Route path="/ask" element={<QuestionPage />} />
      <Route path="/sign-up">
        <Route index element={<SignUp />} />
        <Route path="join" element={<Join />} />
        <Route path="success" element={<Success />} />
      </Route>
      <Route path="qna" element={<Qna />} />
    </Routes>
  );
}
