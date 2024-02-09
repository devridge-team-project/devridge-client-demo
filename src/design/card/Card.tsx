export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-80 border-2 shadow-md p-2 h-20 flex flex-col justify-between rounded-md">
      {children}
    </div>
  );
}
