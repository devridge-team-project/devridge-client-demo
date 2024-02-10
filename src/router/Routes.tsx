import { Home, Join, Layout, SignIn, SignUp, Success } from "components/sign-up";
import { Route, Routes } from "react-router-dom";
import { Community, CommunityById, CommunityPost } from "components/community";
import HelpPwPage from "components/help-pw/HelpPwPage";
import EmailAuthPage from "components/help-pw/EmailAuthPage";
import MyAccountPage from "components/myAccount/myAccountPage";
import DeleteAccountPage from "components/myAccount/deleteAccountPage";
import UpdateAccountPage from "components/myAccount/updateAccountPage";
import ChangePasswordPage from "components/myAccount/changePasswordPage";
import QuestionPage from "components/myAccount/questionPage";
import { Qna, QnaById, QnaPost, QnaSuccess } from "components/qna";
import { Team } from "components/team";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="help-pw">
          <Route index element={<HelpPwPage />} />
          <Route path="email-auth" element={<EmailAuthPage />} />
        </Route>
        <Route path="mypage" element={<MyAccountPage />} />
        <Route path="delete-account" element={<DeleteAccountPage />} />
        <Route path="update-account" element={<UpdateAccountPage />} />
        <Route path="change-pw" element={<ChangePasswordPage />} />
        <Route path="ask" element={<QuestionPage />} />
        <Route path="sign-up">
          <Route index element={<SignUp />} />
          <Route path="join" element={<Join />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="community">
          <Route index element={<Community />} />
          <Route path=":id" element={<CommunityById />} />
          <Route path="post" element={<CommunityPost />} />
        </Route>
        <Route path="qna">
          <Route index element={<Qna />} />
          <Route path=":id" element={<QnaById />} />
          <Route path="post" element={<QnaPost />} />
          <Route path="success" element={<QnaSuccess />} />
        </Route>
        <Route path="team">
          <Route index element={<Team />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
