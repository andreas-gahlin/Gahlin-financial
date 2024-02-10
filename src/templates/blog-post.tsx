import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

interface Data {
  markdownRemark: {
    post: {
      html: string;
      frontmatter: {
        title: string
        description: string
        date: string
      }
    }
  }
}

const BlogPostTemplate: React.FC<Data> = ({ markdownRemark }) => {
  const { post } = markdownRemark;

  return (
    <Layout>
      <div className="container">
        <article>
          <header>
            <h1 className="mt-5 mb-4">{post.frontmatter.title}</h1>
            <p className="text-muted">Published on: {post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPostTemplate;