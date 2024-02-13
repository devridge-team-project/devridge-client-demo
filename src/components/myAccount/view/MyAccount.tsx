import { center, col, row } from "style/display";
import { Link } from "react-router-dom";
import { userInfo } from "connection/api/myInfoService";
import { useSignUpStore } from "shared/sign-up/store";
import { useEffect, useState } from "react";
export default function MyAccount() {
  const [users, setUsers] = useState({ nickname: "", occupation: "" });
  const { setNickname, setOccupation, setSkillIds } = useSignUpStore();
  const { nickname, occupation } = users;

  const getUserInfo = async () => {
    const { status, data } = await userInfo();
    if (status === 200) {
      const { nickname, occupation, skillIds } = data;
      setNickname(nickname);
      setOccupation(occupation);
      setSkillIds(skillIds);
      setUsers({ ...users, nickname, occupation });
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      {/* <img
        src={profileImageUrl}
        className="h-25 w-25 rounded-full bg-gray-200 "
        alt="profileImage"
      /> */}
      <div className="mt-7 text-2xl font-bold">{nickname}</div>
      <div className="mt-3 text-1xl font-bold text-blue-600 ">{occupation}</div>
      <div className={`mt-7.5 w-80 font-bold ${row(2)}`}>
        <Link to="/update-account">회원정보 수정</Link>
      </div>
      <div className={`mt-7.5 w-80 font-bold ${row(2)}`}>
        {" "}
        <Link to="/change-pw">비밀번호 변경</Link>
      </div>
      <div className={`mt-7.5 w-80 font-bold ${row(2)}`}>
        <Link to="/delete-account">회원탈퇴</Link>
      </div>
      <div className={`mt-7.5 w-80 font-bold ${row(2)}`}>
        <Link to="/ask">문의사항</Link>
      </div>
    </div>
  );
}
