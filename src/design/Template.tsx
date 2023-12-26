export default function Template({
  subject,
  children,
}: {
  subject: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-2xl font-bold">{subject}</div>
      <div>{children}</div>
    </div>
  );
}
