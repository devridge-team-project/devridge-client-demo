import { Home, Join, Layout, SignIn, SignUp, Success } from "components/sign-up";
import { Route, Routes } from "react-router-dom";
import {
  Community,
  CommunityDetail,
  CommunityPost,
  Project,
  ProjectPost,
  ProjectDetail,
  Study,
  StudyPost,
  StudyDetail,
} from "components/community";
import { HelpPw, EmailAuth, ResetPw } from "components/help-pw";
import {
  MyAccount,
  DeleteAccount,
  UpdateAccount,
  ChangePassword,
  Question,
} from "components/myAccount";
import { Qna, QnaById, QnaPost, QnaSuccess } from "components/questions";
import { Team } from "components/team";
import SignOut from "components/sign-out";
import { Auth } from "./api";
import { CoffeeChatMessage, CoffeeChatMessageById, CoffeeChatReq } from "components/coffeechat";
import Test from "components/test/Test";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Router() {
  return (
    <Routes>
      {/* These are for api only ex)callback */}
      <Route path="/login">
        <Route path="oauth2/code">
          <Route path="gitHub" element={<Auth.GitHub />} />
          <Route path="naver" element={<Auth.Naver />} />
          <Route path="kakao" element={<Auth.Kakao />} />
          <Route path="google" element={<Auth.Google />} />
        </Route>
      </Route>
      <Route path="test" element={<Test />} />
      {/* These are views for client */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="help-pw">
          <Route index element={<HelpPw />} />
          <Route path="email-auth" element={<EmailAuth />} />
          <Route path="reset-pw" element={<ResetPw />} />
        </Route>
        <Route path="sign-up">
          <Route index element={<SignUp />} />
          <Route path="join" element={<Join />} />
          <Route path="success" element={<Success />} />
        </Route>
        <Route path="community">
          <Route index element={<Community />} />
          <Route path="project">
            <Route index element={<Project />} />
          </Route>
          <Route path="study">
            <Route index element={<Study />} />
          </Route>
        </Route>
        <Route path="questions">
          <Route index element={<Qna />} />
        </Route>
        <Route path="team">
          <Route index element={<Team />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="mypage">
            <Route index element={<MyAccount />} />
            <Route path="delete-account" element={<DeleteAccount />} />
            <Route path="update-account" element={<UpdateAccount />} />
            <Route path="change-pw" element={<ChangePassword />} />
            <Route path="ask" element={<Question />} />
          </Route>
          <Route path="community/post" element={<CommunityPost />} />
          <Route path="community/:id" element={<CommunityDetail />} />
          <Route path="community/project/post" element={<ProjectPost />} />
          <Route path="community/project/:id" element={<ProjectDetail />} />
          <Route path="community/study/post" element={<StudyPost />} />
          <Route path="community/study/:id" element={<StudyDetail />} />
          <Route path="coffeechat">
            <Route index element={<CoffeeChatMessage />} />
            <Route path=":id" element={<CoffeeChatMessageById />} />
            <Route path="res" element={<CoffeeChatReq />} />
            <Route path="req" element={<CoffeeChatReq />} />
          </Route>
          <Route path="questions">
            <Route path=":id" element={<QnaById />} />
            <Route path="post" element={<QnaPost />} />
            <Route path="success" element={<QnaSuccess />} />
          </Route>
        </Route>
      </Route>
      <Route path="sign-out" element={<SignOut />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
