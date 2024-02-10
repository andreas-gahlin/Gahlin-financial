import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/global.scss";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="d-flex flex-column flex-grow-1 containerc text-black"> 
      <Header />
      <main className="min-vh-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;