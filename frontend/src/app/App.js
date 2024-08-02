"use client";
import React, { Suspense } from "react";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import Loading from "./loading";
import { Provider } from "react-redux";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import NotFound from "./not-found";
import store from "./utils/store";
import { usePathname } from "next/navigation";

const AppLayout = ({ children }) => {
  const router = usePathname();
  // const isDeveloperPage = router.pathname.startsWith("/developer");

  // You can access the current path using router.pathname
  // and the full URL using window.location.href (if needed)
  console.log(router.includes("/developer"));

  return (
    <>
      {" "}
      <Provider store={store}>
        {router && router.includes("/developer/") ? (
          <>{children}</>
        ) : (
          <>
            <Header />

            {/* <ErrorBoundary fallback={<NotFound />}> */}
            {/* <Suspense fallback={<Loading />}> */}
            {children}
            {/* </Suspense> */}
            {/* </ErrorBoundary> */}
            <Footer />
          </>
        )}
      </Provider>
    </>
  );
};

export default AppLayout;
