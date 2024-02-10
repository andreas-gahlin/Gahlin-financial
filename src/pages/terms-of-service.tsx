import * as React from 'react';
import Layout from '../components/layout';

const TermsOfServicePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Terms of Service</h1>
        <p>These Terms of Service ("Terms") govern your use of [Your Blog Name] (the "Website") operated by [Your Company Name] ("us," "we," or "our").</p>
        
        <h2>1. Intellectual Property</h2>
        <p>The Website and its original content, features, and functionality are owned by [Your Company Name] and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

        <h2>2. User Accounts</h2>
        <p>If you create an account on the Website, you are responsible for maintaining the security of your account and for any activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.</p>

        <h2>3. Content</h2>
        <p>Our Website allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Website, including its legality, reliability, and appropriateness.</p>

        <h2>4. Links to Other Websites</h2>
        <p>Our Website may contain links to third-party websites or services that are not owned or controlled by [Your Company Name]. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>

        <h2>5. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at [Your Contact Information].</p>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;