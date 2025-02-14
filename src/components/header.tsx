import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-5 border-b-2 border-cyan-900 md:mb-10">
      <nav className="flex items-center justify-between p-4">
        <Link href="/">
          <h1 className="text-shadow group text-4xl font-semibold text-cyan-300">
            smzt
            <span className="block h-0.5 max-w-0 bg-cyan-900 transition-all duration-300 md:group-hover:max-w-full"></span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="group text-cyan-50">
              Home
              <span className="block h-0.5 max-w-0 bg-cyan-900 transition-all duration-300 md:group-hover:max-w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
