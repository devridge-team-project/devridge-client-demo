import { profiles } from "asset/test/profiles";
import Card from "../widget/Card";
import randomItem from "util/randomItem";
export default function ReviewCard({
  image,
  name,
  introduction,
  review,
  index,
  onClick,
}: {
  image?: string;
  name: string;
  introduction: string;
  review: {
    title: string;
    content: string;
  };
  index: number;
  onClick?: () => unknown | (() => Promise<unknown>);
}) {
  const { title, content } = review;

  return (
    <button onClick={onClick} className={index % 2 === 1 ? "mt-5" : ""}>
      <Card options={{ width: "sm", height: "md", round: "xl", isBorder: true }}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex w-34 gap-2 items-center">
            <img
              src={`/images/test/${randomItem(profiles)}.png`}
              alt="profile"
              className="w-9 h-9 rounded-full overflow-hidden object-cover"
            />
            <div className="font-bold flex flex-col items-start">
              <div className="text-sm truncate">{name}</div>
              <div className="text-xxs text-blue-500 truncate">{introduction}</div>
            </div>
          </div>
          <div className="flex flex-col w-34 items-start">
            <div className="text-sm font-bold truncate w-full text-start">{title}</div>
            <div className="text-xxs h-16 overflow-hidden line-clamp-4">{content}</div>
          </div>
        </div>
      </Card>
    </button>
  );
}
