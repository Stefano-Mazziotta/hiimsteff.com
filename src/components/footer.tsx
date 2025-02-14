import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 flex justify-center border-t-2 border-cyan-900 p-4 md:mt-10">
      <p>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️‍🔥
        </span>{" "}
        by{" "}
        <Link
          className="text-blue-600 visited:text-purple-600"
          href="https://www.github.com/stefano-mazziotta"
        >
          Stefano Mazziotta
        </Link>
      </p>
    </footer>
  );
}
