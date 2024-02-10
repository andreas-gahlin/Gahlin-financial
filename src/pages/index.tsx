import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Post from '../components/post'
import { Data } from '../types/types'


/*
  <Post 
    title={post.frontmatter.title}
    description={post.frontmatter.description}
    date={post.frontmatter.date}
    path={post.frontmatter.path}
    excerpt={post.excerpt}
    />
))}          
*/

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
                  <a>{post.fields.slug}</a>
                  <Link to={post.fields.slug} className="btn btn-primary float-right">Read More</Link>        
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
            description
            date(formatString: "MMMM DD, YYYY")
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
