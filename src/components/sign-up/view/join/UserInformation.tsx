import { useEffect, useState } from "react";
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
  const navigate = useNavigation();

  /**
   * @규칙
   * - nickname
   *  - 영어, 한글, 숫자만 허용
   *  - 자음 모음만 오는 것은 안됨.
   *  - 3글자 이상 12글자 이하
   * - introduction
   *  - 영어, 한글, 숫자만 허용
   *  - 자음 모음만 오는 것은 안됨.
   *  - 5글자 이상 25글자 이하.
   *  - , . ! ? 만 허용
   * - skillIds: number[]
   * - occupation: number
   */

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
    nickname: nickname[0],
    introduction: introduction[0],
    skillIds: [1, 2, 3],
    occupationId: 2,
    tempJwt: authToken,
  };

  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

  formData.append("member", blob);

  const { mutate, error, isError, isSuccess } = useMutation({
    mutationKey: ["user"],
    mutationFn: () => users.post(formData),
  });
  const { mutate: mutateAuth, isSuccess: isSuccessAuth } = useMutation({
    mutationKey: ["signUpAuth"],
    mutationFn: () => signUp.auth.post(authData),
  });

  const success = isSuccess || isSuccessAuth;

  useEffect(() => {
    if (success) return navigate("/sign-up/success");
  }, [success]);

  const necessary = nickname[0] !== "" && introduction[0] !== "" && occupation[0] !== 0;
  const handleSignUp = () => {
    if (!necessary) return alert("필수 항목을 입력해주세요.");
    if (authToken !== "") return mutateAuth();
    return mutate();
  };

  return (
    <SignUpLayout
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
      buttons={[["확인", handleSignUp]]}
    />
  );
}
