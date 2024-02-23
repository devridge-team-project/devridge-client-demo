import { col, center, row } from "style/display";
import { Link, useNavigate } from "react-router-dom";

export default function CommunityLayout({
  children,
  tag,
}: {
  children: React.ReactNode;
  tag: string;
}) {
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={col(0, 80)}>
        <div className="text-1xl font-bold bg-blue-grey border-y-2 py-4 pl-9 text-white">
          커뮤니티
        </div>
        <div className="text-1xl font-bold py-4 pl-9">
          <Link to="/community" className={tag === "issue" ? "text-blue-grey" : ""}>
            자유게시판
          </Link>
          <Link
            to="/community/project"
            className={`pl-9${tag === "project" ? " text-blue-grey" : ""}`}
          >
            프로젝트
          </Link>
          <Link to="/community/study" className={`pl-9${tag === "study" ? " text-blue-grey" : ""}`}>
            스터디
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
