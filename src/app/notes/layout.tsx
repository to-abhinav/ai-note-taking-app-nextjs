import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl m-auto p-4">{children}</main>
    </div>
  );
}
