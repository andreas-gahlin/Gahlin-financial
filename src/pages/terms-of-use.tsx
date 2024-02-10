import * as React from 'react';
import Layout from '../components/layout';

const TermsOfUsePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Terms of Use</h1>
        <p>These Terms of Use ("Terms") govern your use of [Your Blog Name] (the "Website") operated by [Your Company Name] ("us," "we," or "our").</p>
        
        <h2>1. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
        <ul>
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on the Website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by [Your Company Name] at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession, whether in electronic or printed format.</p>

        <h2>2. Disclaimer</h2>
        <p>The materials on the Website are provided on an "as is" basis. [Your Company Name] makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, [Your Company Name] does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.</p>

        <h2>3. Limitations</h2>
        <p>In no event shall [Your Company Name] or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if [Your Company Name] or a [Your Company Name] authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2>4. Revisions and Errata</h2>
        <p>The materials appearing on the Website could include technical, typographical, or photographic errors. [Your Company Name] does not warrant that any of the materials on its website are accurate, complete, or current. [Your Company Name] may make changes to the materials contained on the Website at any time without notice.</p>

        <h2>5. Governing Law</h2>
        <p>Any claim relating to the Website shall be governed by the laws of [Your Jurisdiction] without regard to its conflict of law provisions.</p>

        <h2>6. Changes to Terms</h2>
        <p>[Your Company Name] may revise these Terms at any time without notice. By using the Website, you are agreeing to be bound by the then-current version of these Terms.</p>

        <h2>7. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at [Your Contact Information].</p>
      </div>
    </Layout>
  );
};

export default TermsOfUsePage;
