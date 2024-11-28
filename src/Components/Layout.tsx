import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="bg-base-200 p-4">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
