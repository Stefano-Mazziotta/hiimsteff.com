import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="group text-4xl font-semibold text-cyan-300 text-shadow">
            smzt
            <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-300 h-0.5 bg-cyan-900"></span>
          </h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="group text-cyan-50">
              Home
              <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-300 h-0.5 bg-cyan-900"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
