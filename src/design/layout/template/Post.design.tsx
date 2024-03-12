interface PostLayoutProps {
  subject: string;
  children: React.ReactNode;
}

export default function PostLayout({ subject, children }: PostLayoutProps) {
  return (
    <div>
      <div className="">{subject}</div>
      {children}
    </div>
  );
}
