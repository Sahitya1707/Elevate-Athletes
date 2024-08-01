"use client";
import React, { Suspense } from "react";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import Loading from "./loading";
import { Provider } from "react-redux";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import NotFound from "./not-found";
import store from "./utils/store";

const AppLayout = ({ children }) => {
  return (
    <>
      {" "}
      <Provider store={store}>
        <Header />
        <ErrorBoundary fallback={<NotFound />}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
        <Footer />
      </Provider>
    </>
  );
};

export default AppLayout;
