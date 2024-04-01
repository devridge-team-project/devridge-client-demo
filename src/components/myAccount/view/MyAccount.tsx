import { center, col, row } from "style/display";
import { Link } from "react-router-dom";
import { logout } from "connection/api/login";
import { useSignUpStore } from "shared/sign-up/store";
import { useMutation } from "@tanstack/react-query";
import { Button } from "design";
import { removeCookie } from "util/cookies";
export default function MyAccount() {
  const {
    setAuthToken,
    signUpData: { nickname, occupation, imageUrl },
  } = useSignUpStore();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: () => {
      removeCookie("accessToken");
      setAuthToken("");
      alert("로그아웃 되었습니다. ");
    },
  });

  return (
    <div className={`mt-[25px] ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div className="flex">
          <img
            src={imageUrl as string}
            className="h-25 w-25 rounded-full bg-gray-200 "
            alt="profileImage"
          />
          <div className="ml-3.5">
            <div className="text-1xl font-bold text-blue-grey">{nickname}</div>
            <div className="text-1xl">{occupation}</div>
          </div>
        </div>

        <Link to="update-account">
          <div className={`mt-[38px] bg-gray-100 h-10 w-80 font-bold ${center.colO(0)}`}>
            회원정보 수정
          </div>
        </Link>
        <div className="font-bold mt-[70px]">계정</div>
        <div className={`mt-5 w-80 ${row(2)}`}>
          {" "}
          <Link to="change-pw">비밀번호 변경</Link>
        </div>
        <div className={`mt-5 w-80 ${row(2)}`}>
          <Link to="delete-account">회원탈퇴</Link>
        </div>
        <div className={`mt-5 mb-12.5 w-80 ${row(2)}`}>
          <Link to="ask">문의사항</Link>
        </div>
        <Button title="로그아웃" onClick={mutate} options={{ size: "full" }} />
      </div>
    </div>
  );
}
