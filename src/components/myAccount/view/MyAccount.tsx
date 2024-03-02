import { center, col, row } from "style/display";
import { Link } from "react-router-dom";
import { logout } from "connection/api/login";
import { users } from "connection/api/users";
import { useSignUpStore } from "shared/sign-up/store";
import { useQuery, useMutation } from "@tanstack/react-query";
import useSignIn from "hook/useSignIn";
import { Button } from "design";
import { useEffect, useState } from "react";
import { removeCookie } from "util/cookies";
export default function MyAccount() {
  useSignIn();
  const [nickname, setNickname] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [skillIds, setSkillIds] = useState<number[]>([]);
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

  const { data: user, isLoading: loading } = useQuery({
    queryKey: ["MyAccount"],
    queryFn: () => users.getDetails(),
  });
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
  });
  if (isSuccess) {
    removeCookie("accessToken");
    alert("로그아웃 되었습니다. ");
  }

  useEffect(() => {
    if (user) {
      const { nickname, occupation, skillIds, imageUrl } = user;
      setProfileImageUrl(imageUrl ?? "");
      setNickname(nickname);
      setOccupation(occupation);
      setSkillIds(skillIds);
    }
  }, [user]);

  return (
    <div className={`mt-[25px] ${center.colO(0)}`}>
      <div className={`${col(2, 80)}`}>
        <div className="flex">
          <img
            src={profileImageUrl}
            className="h-25 w-25 rounded-full bg-gray-200 "
            alt="profileImage"
          />
          <div className="ml-3.5">
            <div className="text-2xl font-bold text-blue-grey">{nickname}</div>
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
