import { Home, Join, Layout, SignIn, SignUp, Success } from "components/sign-up";
import { Route, Routes } from "react-router-dom";
import {
  Community,
  CommunityById,
  CommunityPost,
  Project,
  ProjectPost,
  Study,
} from "components/community";
import { HelpPw, EmailAuth, ResetPw } from "components/help-pw";
import {
  MyAccount,
  DeleteAccount,
  UpdateAccount,
  ChangePassword,
  Question,
} from "components/myAccount";
import { Qna, QnaById, QnaPost, QnaSuccess } from "components/qna";
import { Team } from "components/team";
import SignOut from "components/sign-out";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="help-pw">
          <Route index element={<HelpPw />} />
          <Route path="email-auth" element={<EmailAuth />} />
          <Route path="reset-pw" element={<ResetPw />} />
        </Route>
        <Route path="mypage">
          <Route index element={<MyAccount />} />
          <Route path="delete-account" element={<DeleteAccount />} />
          <Route path="update-account" element={<UpdateAccount />} />
          <Route path="change-pw" element={<ChangePassword />} />
          <Route path="ask" element={<Question />} />
        </Route>
        <Route path="sign-up">
          <Route index element={<SignUp />} />
          <Route path="join" element={<Join />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="community">
          <Route index element={<Community />} />
          <Route path=":id" element={<CommunityById />} />
          <Route path="project">
            <Route index element={<Project />} />
            <Route path="post" element={<ProjectPost />} />
          </Route>
          <Route path="study" element={<Study />} />
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
      <Route path="sign-out" element={<SignOut />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
