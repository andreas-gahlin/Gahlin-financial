import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer fixed-bottom py-3 bg-dark text-white">
      <div className="container">
        <span>© {new Date().getFullYear()} Gåhlin Consulting AB</span>
      </div>
    </footer>
  );
};

export default Footer;