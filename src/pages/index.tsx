import * as React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { Data } from '../types/types';
import Post from '../components/post'

const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="container">
        <h1 className="mt-5 mb-4">Latest Blog Posts</h1>
        <div className="row">
          {posts.map(({ node: post }) => (
            <Post 
              title={post.frontmatter.title} 
              description={post.frontmatter.description} 
              date={post.frontmatter.date} 
              body={post.excerpt} 
              path={post.fields.slug}
              image={post.frontmatter.image}/>
          ))}
        </div>
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
            image
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
