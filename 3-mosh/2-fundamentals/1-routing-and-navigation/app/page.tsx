import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users" className="text-blue-500 hover:text-blue-700">Users</Link>
    </main>
  );
}
