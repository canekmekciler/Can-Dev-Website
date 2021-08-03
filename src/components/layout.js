import React from "react"
import Header from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Header />
        <div className="content">
            { children }
        </div>
        <Footer />
    </div>
  );
}