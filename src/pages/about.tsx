import React from 'react';
import Layout from '../components/layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="col-md-6">
          <h2>About Me</h2>
          <p>
            Hi, I'm [Your Name]. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam suscipit erat sed orci tristique, sit amet pellentesque lectus feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit erat sed orci
            tristique, sit amet pellentesque lectus feugiat.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Profile Picture</h2>
          {/* TODO: add later <img src={profileImage} alt="Profile" className="img-fluid" />*/}
        </div>
        <hr className="my-4" />
      </div>
    </Layout>
  );
};

export default AboutPage;

// export const Head: HeadFC = () => <title>Home Page</title>
