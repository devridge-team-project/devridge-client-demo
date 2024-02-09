import { center, col, row } from "style/display";
import { Link } from "react-router-dom";
import { useSignUpStore } from "shared/sign-up/store";
export default function MyAccount() {
  const { nickname, setNickname, profileImageUrl, setProfileImageUrl, occupation, setOccupation } =
    useSignUpStore();
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
