import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SignUpLayout, Input, AlertModal } from "design";
import { useWidgetStore, useSignUpStore } from "shared";
import { users, signUp } from "connection";
import useNavigation from "hook/useNavigation";
import useValidation from "hook/useValidation";

export default function UserInformation() {
  const nickname = useState<string>("");
  const introduction = useState<string>("");
  const occupation = useState<number>(2);
  const { authToken, signUpData } = useSignUpStore();
  const { setModal } = useWidgetStore();
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
  const {
    isNicknameLengthCorrect,
    isNicknameWordCorrect,
    isIntroductionLengthCorrect,
    isIntroductionWordCorrect,
  } = useValidation(nickname[0], introduction[0]);

  const handleSignUp = () => {
    if (!isNicknameLengthCorrect) return setModal("nickNameLength");
    if (!isNicknameWordCorrect) return setModal("nickNameWord");
    if (!isIntroductionLengthCorrect) return setModal("introductionLength");
    if (!isIntroductionWordCorrect) return setModal("introductionWord");
    if (authToken !== "") return mutateAuth();
    return mutate();
  };

  return (
    <SignUpLayout
      widgets={{
        components: [
          ["nickNameLength", <AlertModal script="닉네임은 3글자 이상 12글자 이하입니다." />],
          [
            "nickNameWord",
            <AlertModal script="닉네임에 자음 또는 모음만 오는 것은 불가능합니다." />,
          ],
          [
            "introductionLength",
            <AlertModal script="자기 소개는 5글자 이상 25글자 이하로 해주세요." />,
          ],
          [
            "introductionWord",
            <AlertModal script="자기소개에 자음 또는 모음만 오는 것은 불가능합니다." />,
          ],
        ],
      }}
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
