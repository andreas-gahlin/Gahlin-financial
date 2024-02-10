import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/global.scss";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout-container d-flex flex-column min-vh-100  bg-light-gray text-white">
      <Header />
      <main className="layout-container bg-light-gray text-black">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;