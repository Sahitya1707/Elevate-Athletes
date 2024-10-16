import { Inter } from "next/font/google";
import { Iceland } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./not-found";
import NotFound from "./not-found";
import { Provider } from "react-redux";
import store from "./utils/store";
import AppLayout from "./App";

const inter = Inter({ subsets: ["latin"] });
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
  // By providing a value of swap , we tell the browser to render the page right away with fallback fonts, and then redraw the page once the fonts have loaded
  display: "swap",
});

export const metadata = {
  title: "Elevate Athletes",
  description: "This website is create to elevate athletes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iceland.className}>
        {/* <Provider store={store}> */}

        {/* <App children={children}/> */}

        <AppLayout children={children} />
        {/* </Provider> */}
      </body>
    </html>
  );
}
