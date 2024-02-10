import React from "react"

const Footer: React.FC = () => {
    return (
      <footer className="footer fixed-bottom py-3 bg-light">
        <div className="container">
          <span className="text-muted">© {new Date().getFullYear()} Gåhlin Consulting AB</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;