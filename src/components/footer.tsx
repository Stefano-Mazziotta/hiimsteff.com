import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 flex justify-center border-t-2 border-cyan-900 p-4 md:mt-10">
      <p className="text-sm text-center text-gray-500">
        Photographs and website by{" "} 
        <Link
          className="text-blue-600 visited:text-purple-600 hover:underline"
          href="https://www.github.com/stefano-mazziotta"
          target="_blank"
        >
          Stefano Mazziotta
        </Link>
      </p>
    </footer>
  );
}
