import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 flex justify-center">
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
