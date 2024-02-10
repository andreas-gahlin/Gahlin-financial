import React from 'react';
import Layout from '../component/layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius fringilla magna. Suspendisse potenti. Duis vel tortor et quam suscipit vehicula. Mauris eu diam nec nulla lacinia feugiat. Nam convallis felis et augue sodales, eget eleifend dolor fermentum.</p>
      </div>
    </Layout>
  );
};

export default AboutPage;

// export const Head: HeadFC = () => <title>Home Page</title>
