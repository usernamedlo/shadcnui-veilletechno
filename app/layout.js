import "./globals.css";
import { Inter } from "next/font/google";

import clsx from "clsx";

import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Header } from "@/src/feature/layout/Header";
import { Footer } from "@/src/feature/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Time to Buy",
  description: "A simple e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "bg-background h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex-1 m-auto py-7 w-full">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
