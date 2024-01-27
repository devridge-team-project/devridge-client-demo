import React from "react";
import { center, col, row } from "style/display";
import { useSignUpStore } from "shared/sign-up/store";
import Input from "../../common/input";
import Button from "../../common/button";

export default function UpdateAccount() {
  const { nickname, profileImageUrl } = useSignUpStore();
  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <form className={`${col(2)} w-80`} onSubmit={onSubmitHandler}>
        <div className="text-2xl font-bold">회원정보 수정</div>
        <img src={profileImageUrl} alt="profileImage" />
        <div>{nickname}</div>
        <Input
          className="mt-2.5 block h-14 w-80 border"
          type="text"
          name="introduction"
          placeholder="자기소개를 입력해주세요"
        />
        <Button className="mt-5 h-14 w-80  bg-black text-white" type="submit">
          저장하기
        </Button>
      </form>
    </div>
  );
}
