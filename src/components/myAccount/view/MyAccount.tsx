import { center, col, row } from "style/display";
import { Link } from "react-router-dom";

export default function MyAccount() {
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <Link to="/update-account">회원정보 수정</Link>
      <Link to="/change-pw">비밀번호 변경</Link>
      <Link to="/delete-account">회원탈퇴</Link>
      <Link to="/ask">문의사항</Link>
    </div>
  );
}
