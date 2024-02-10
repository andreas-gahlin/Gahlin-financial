import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../component/layout'
import { Link, graphql } from "gatsby"

interface Node {
  id: string;
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
  };
  excerpt: string;
}

interface Data {
  allMarkdownRemark: {
    edges: {
      node: Node;
    }[];
  };
}

// style={pageStyles}
const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="container">
        <h1 className="mt-5 mb-4">Latest Blog Posts</h1>
        <div className="row">
          {posts.map(({ node: post }) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.frontmatter.title}</h5>
                  <p className="card-text">{post.excerpt}</p>
                  <Link to={post.fields.slug} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
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

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
