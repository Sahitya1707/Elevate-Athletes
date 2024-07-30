import { Inter } from "next/font/google";
import { Iceland } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elevate Athletes",
  description: "This website is create to elevate athletes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iceland.className}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
