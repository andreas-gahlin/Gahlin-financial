import * as React from 'react';
import Layout from '../components/layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Contact Us</h1>
        <p>Please feel free to contact us using the form below:</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea className="form-control" id="message" name="message" rows={4} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;