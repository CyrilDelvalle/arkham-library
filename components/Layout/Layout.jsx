import React from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-800"> {children} </main>
      <Footer />
    </>
  );
}
