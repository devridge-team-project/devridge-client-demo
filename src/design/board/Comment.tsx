import { profiles } from "asset/test/profiles";
import randomItem from "util/randomItem";

export default function Comment({
  nickname,
  profileImageUrl,
  introduction,
  content,
}: {
  nickname: string;
  profileImageUrl: string | null;
  introduction: string | null;
  content: string;
}) {
  return (
    <div className="rounded-xl border-2 p-4 flex flex-col gap-4 min-h-80">
      <div className="flex items-center border-b pb-8 gap-4">
        {profileImageUrl ? (
          <img
            src={`/images/test/${randomItem(profiles)}.png`}
            alt="profile"
            className="rounded-full w-16 h-16 overflow-hidden object-contain"
          />
        ) : (
          <div className="rounded-full bg-black size-16" />
        )}
        <div>
          <div className="text-lg font-bold">{nickname}</div>
          <div className="text-sm text-gray-300">{introduction ?? "지나가는 개발자"}</div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}
