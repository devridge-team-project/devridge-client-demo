import Board from "./Board";

export default function BulletinBoard({
  type,
  title,
  createdAt,
  content,
}: {
  type: string;
  title: string;
  createdAt: string;
  content: string;
}) {
  return (
    <Board>
      <div>
        <div className="bg-gray-200 rounded-xl text-black w-16 h-8 flex justify-center items-center">
          {type}
        </div>
        <div className="text-3xl">{title}</div>
        <div className="text-sm text-gray-200">{createdAt}</div>
      </div>
      <div className="text-xl">{content}</div>
    </Board>
  );
}
