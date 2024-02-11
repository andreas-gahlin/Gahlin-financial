import React from 'react';
import Header from './header';
import Footer from './footer';
import WelcomePage from './welcome'
import '../styles/global.scss';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-black"> 
      <header>
        <Header />
        <WelcomePage />
      </header>
      <main className="min-vh-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;