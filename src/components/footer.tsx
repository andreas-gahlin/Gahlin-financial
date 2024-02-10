import React, { useState } from "react";
import { Link } from "gatsby";

const Footer: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const toggleLegal = () => {
    setIsLegalOpen(!isLegalOpen);
  };

  return (
    <footer className="footer fixed-bottom py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <span>© {new Date().getFullYear()} Gåhlin Consulting AB</span>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/terms-of-use" className="text-white">Terms of Use</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/terms-of-service" className="text-white">Terms of Service</Link>
              </li>
              <li className="list-inline-item">
                <button
                  className={`btn btn-sm btn-outline-light ${isLegalOpen ? 'active' : ''}`}
                  onClick={toggleLegal}
                >
                  Legal Information <i className={`bi bi-chevron-${isLegalOpen ? 'up' : 'down'}`}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Legal Information */}
        <div id="legalCollapse" className={`${isLegalOpen ? '' : 'accordion-collapse collapse legal-info mt-3'}`}>
          <div className="accordion-item">
            <h5 className="accordion-header">
                Legal Information
            </h5>
            <div >
              <div className="accordion-body">
                <p>
                  The information provided on this blog is for informational purposes only and should not be considered as professional financial advice. Readers should consult with a qualified financial advisor or professional before making any financial decisions.
                </p>
                <p>
                  We may have financial relationships with companies or products mentioned on this blog, including affiliate partnerships or sponsored content. Any compensation received for promoting products or services will be disclosed clearly and prominently in the relevant blog posts.
                </p>
                {/* Add more legal information here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
