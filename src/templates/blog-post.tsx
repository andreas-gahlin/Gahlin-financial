import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby'
import Layout from '../components/layout';

interface Data {
  markdownRemark: {
      html: string;
      frontmatter: {
        title: string
        date: string
      }
      fields: {
        slug: string
      }
  }
}

const BlogPostTemplate: React.FC<PageProps<Data>> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div className="container bg-light-gray text-black py-3">
        {/* Added bg-dark and text-white classes */}
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

export const postQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;

export default BlogPostTemplate;