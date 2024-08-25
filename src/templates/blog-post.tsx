import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { ImageData } from '../types/types';
import WelcomePage from '../components/welcome';

interface Data {
  markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        image: ImageData
        authorimage: ImageData
      };
      fields: {
        slug: string;
      };
  };
}

const BlogPostTemplate: React.FC<PageProps<Data>> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout showWelcometext={true}>
      {/*<div>I was here :D {JSON.stringify(data, null, 2)}</div>*/}
      <WelcomePage author={post.frontmatter.title} authorimage={post.frontmatter.authorimage} ></WelcomePage>
      <div className="container bg-light-gray text-black py-3 mx-auto" style={{ maxWidth: '50%' }}>
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
        author
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        authorimage {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default BlogPostTemplate;
