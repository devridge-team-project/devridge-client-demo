export default function Widgets({ children }: { children: React.ReactNode }) {
  const animations = "duration-";
  const flag = false;
  if (flag)
    return (
      <>
        <div className="absolute top-0 left-0 w-full min-h-screen bg-red-500" />
        {children}
      </>
    );

  return <>{children}</>;
}
