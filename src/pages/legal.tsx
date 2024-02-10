import * as React from 'react';
import Layout from '../components/layout';
import { Link } from "gatsby";

const LegalPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Legal Information</h1>

        <h2>Disclaimer of Liability</h2>
        <p>The information provided on this blog is for informational purposes only and should not be considered as professional financial advice. Readers should consult with a qualified financial advisor or professional before making any financial decisions.</p>

        <h2>Disclosure of Relationship</h2>
        <p>We may have financial relationships with companies or products mentioned on this blog, including affiliate partnerships or sponsored content. Any compensation received for promoting products or services will be disclosed clearly and prominently in the relevant blog posts.</p>

        <h2>Investment Risks</h2>
        <p>All investment decisions involve risk, and past performance is not indicative of future results. Readers should conduct their own research and consult with a financial advisor before investing.</p>

        <h2>Accuracy of Information</h2>
        <p>While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy or completeness of the content on this blog. Readers should verify any information independently before relying on it.</p>

        <h2>Legal Jurisdiction</h2>
        <p>This blog is governed by the laws of [Your Country/Region]. Any disputes or legal matters arising from the use of this blog shall be subject to the jurisdiction of the courts in [Your Jurisdiction].</p>

        <h2>User Responsibility</h2>
        <p>Readers are responsible for their own financial decisions and actions. Any actions taken based on information from this blog are done at the reader's own risk.</p>

        <h2>Comment Policy</h2>
        <p>Comments on this blog are subject to moderation. We reserve the right to delete or edit comments that violate our comment policy, which includes but is not limited to spam, offensive language, and irrelevant content.</p>

        <h2>Privacy Policy</h2>
        <p>Please refer to our <Link to="/privacy-policy">Privacy Policy</Link> for information on how we collect, use, and protect user data.</p>

        <h2>Terms of Use</h2>
        <p>Please refer to our <Link to="/terms-of-use">Terms of Use</Link> for the terms and conditions governing the use of this blog.</p>

        <h2>Terms of Service</h2>
        <p>Please refer to our <Link to="/terms-of-service">Terms of service</Link> for the service terms governing the use of this blog.</p>

    
      </div>
    </Layout>
  );
};

export default LegalPage;