export default function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="flex justify-center items-center w-12 h-12 bg-black text-white rounded-full cursor-pointer"
      onClick={onClick}
    >
      +
    </div>
  );
}
