import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-cyan-300 decoration-cyan-950 text-shadow">
            smzt
          </h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
