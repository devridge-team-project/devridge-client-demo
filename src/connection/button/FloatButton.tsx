import { cn } from "util/classNames";

export default function FloatButton({
  image,
  onClick,
}: {
  image: string;
  onClick: () => unknown | (() => Promise<unknown>);
}) {
  const positions = "fixed bottom-8 right-8";
  const displays = "flex justify-center items-center";
  const sizes = "size-24";
  const styles = "bg-black text-white rounded-full cursor-pointer";
  return (
    <div className={cn(positions, displays, sizes, styles)} onClick={onClick}>
      <img src={image} alt="float button" />
    </div>
  );
}
