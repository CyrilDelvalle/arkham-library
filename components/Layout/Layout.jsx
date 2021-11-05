import React from "react";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "../../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}> {children} </main>
      <Footer />
    </>
  );
}
