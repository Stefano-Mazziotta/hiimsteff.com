import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMZT PHOTOGRAPHY",
  description: "Analog photographies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="p-4 flex justify-between">
            <Link href="#">
              <h1>SMZT</h1>
            </Link>
            <ul className="flex gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Albums">Albums</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
