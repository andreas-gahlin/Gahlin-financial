import * as React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { Data } from '../types/types';
import Post from '../components/post';

const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="container text-center">
        <h1 className="mt-5 mb-4">Latest Blog Posts</h1>
        {posts.map(({ node: post }) => (
          <div key={post.id} className="row mb-4">
            <div className="col mx-auto"> {/* Added mx-auto class */}
              <Post 
                title={post.frontmatter.title} 
                description={post.frontmatter.description} 
                date={post.frontmatter.date} 
                body={post.excerpt} 
                path={post.fields.slug}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMM Do YYYY")
            image {
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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;

export default IndexPage;
