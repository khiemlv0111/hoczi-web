import { StudiesSidebar } from "./StudiesSidebar";

export default function StudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 min-h-0">
      <StudiesSidebar />
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
