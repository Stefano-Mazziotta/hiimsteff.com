import type { Metadata } from "next";
import { Inter, Cutive } from "next/font/google";
import Header from "@/ui/header";
import Footer from "@/ui/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cutive = Cutive({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cutive",
});

export const metadata: Metadata = {
  title: "SMZT PHOTOGRAPHY",
  description: "Analog photographies",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cutive.variable}>
      <body className={inter.className}>
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
