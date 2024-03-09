interface Props {
  title: string;
  onClick: () => void;
  commentCount: number;
  likeCount: number;
  views: number;
}

export default function Card({ title, commentCount, likeCount, views, onClick }: Props) {
  return (
    <div
      className="w-full border-2 shadow-md p-2 h-20 flex flex-col justify-between rounded-md"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 font-bold">
        <div>{title}</div>
      </div>
      <div className="flex justify-end gap-4 text-xs text-gray-300">
        <div>답변수 {commentCount}</div>
        <div>추천수 {likeCount}</div>
        <div>조회수 {views}</div>
      </div>
    </div>
  );
}
