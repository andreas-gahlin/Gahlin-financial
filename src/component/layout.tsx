import React from "react"
import Header from './header'
import Footer from "./footer"
import '../styles/global.scss';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
