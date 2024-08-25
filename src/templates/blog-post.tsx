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
        author: string
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
      <WelcomePage author={post.frontmatter.title} authorimage={post.frontmatter.authorimage} ></WelcomePage>
      <div className="container bg-light-gray text-black py-3 mx-auto" style={{ maxWidth: '70%' }}>
        <article>
          <header>
          <h1 className="mt-5 mb-4">{post.frontmatter.title}</h1>
            <div className="author-info d-flex align-items-center mb-4">
              <div className="author-image" style={{ marginRight: '10px' }}>
                <img 
                  src={post.frontmatter.authorimage.childImageSharp.fluid.src} 
                  alt={post.frontmatter.author} 
                  className="rounded-circle" 
                  style={{ width: '50px', height: '50px' }} 
                />
              </div>
              <div>
                <p className="mb-0">Written by {post.frontmatter.author}</p>
                <p className="text-muted mb-0">Published on {post.frontmatter.date}</p>
              </div>
            </div>
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
