import React from 'react';
import Header from './header';
import Footer from './footer';
import WelcomePage from './welcome'
import '../styles/global.scss';

interface Data {
  showWelcometext?: boolean;
  
}

const Layout: React.FC<React.PropsWithChildren<Data>> = ({ children, showWelcometext }) => {
  return (
    <div className="text-black"> 
      <header>
        <Header />
        {!showWelcometext && <WelcomePage />}
      </header>
      <main className="min-vh-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
