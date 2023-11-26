import "./globals.css";
import Header from "@/components/layout/shared/header";
import Footer from "@/components/layout/shared/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "honyablog",
  description: "honyablog description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={clsx(inter.className, "h-screen")}>
        <Header />
        <div className="max-w-screen-lg mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
