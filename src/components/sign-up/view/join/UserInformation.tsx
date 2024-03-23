import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SignUpLayout, Input, AlertModal } from "design";
import { useWidgetStore, useSignUpStore } from "shared";
import { users, signUp } from "connection";
import useNavigation from "hook/useNavigation";
import { modal } from "../../static/modal";

export default function UserInformation() {
  const nickname = useState<string>("");
  const introduction = useState<string>("");
  const occupation = useState<number>(2);
  const { authToken, signUpData } = useSignUpStore();
  const { email, password, provider } = signUpData;
  const navigate = useNavigation();

  const data = {
    email: "test135125137@test.com",
    password: "asdf1234",
    provider: "normal",
    nickname: "test123125",
    introduction: "안녕하세요개발자입니다",
    skillIds: [1, 2, 3],
    occupationId: 2,
  };

  const authData = {
    nickname: nickname,
    introduction: introduction,
    skillIds: [1, 2, 3],
    occupationId: 2,
    tempJwt: authToken,
  };

  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  // if (profileImageUrl) {
  //   formData.append("image", profileImageUrl);
  //   const file = new File([""], "/images/test/default.png");
  //   formData.append("image", file);
  // }
  formData.append("member", blob);

  const { mutate, error, isError, isSuccess } = useMutation({
    mutationKey: ["user"],
    mutationFn: () => users.post(formData),
  });
  const { mutate: mutateAuth } = useMutation({
    mutationKey: ["signUpAuth"],
    mutationFn: () => signUp.auth.post(),
  });

  if (isError) {
    console.log("email", email, "password", password, "provider", provider, "nickname", nickname);
    console.log(error);
  }
  if (isSuccess) navigate("/sign-up/success");
  const isDuplicatedId = false;

  return (
    <SignUpLayout
      widgets={{ components: [[isDuplicatedId, <AlertModal script={modal.duplicatedId} />]] }}
      titles={{ title: "회원 가입" }}
      inputs={[
        { title: "닉네임", state: nickname, placeholder: "프로필 이름" },
        { title: "자기 소개", state: introduction, placeholder: "자신을 소개해보세요." },
      ]}
      selects={[
        {
          title: "직군 선택",
          selectOptions: [
            { value: 1, title: "개발자" },
            { value: 2, title: "디자이너" },
            { value: 3, title: "기획자" },
          ],
          placeholder: "직군을 선택해주세요.",
          state: occupation,
        },
      ]}
      buttons={[["확인", mutate]]}
    />
  );
}
