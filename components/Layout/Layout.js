import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children,title }) {
  return (
    <div className=""  >
      <Head>
        <title>{title}-BzkNews</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
     <main className="max-w-[1200px] mx-auto mt-10">
     {children}
     </main>
    </div>
  );
}
