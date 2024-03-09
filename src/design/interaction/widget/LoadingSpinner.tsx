export default function Loading() {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
    </div>
  );
}
