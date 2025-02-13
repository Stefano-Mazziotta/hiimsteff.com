import Footer from "@/components/footer";
import Header from "@/components/header";
import type Metadata from "next";
import { Cutive, Inter } from "next/font/google";

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
      <body
        className={`${inter.className} bg-primary text-secondary`}
        suppressHydrationWarning={true}
      >
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
