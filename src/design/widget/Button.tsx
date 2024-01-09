import { center } from "style/display";

export default function Button({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`${center.colO(0)} h-12 w-full rounded-md bg-black text-white`}
    >
      {title}
    </button>
  );
}
