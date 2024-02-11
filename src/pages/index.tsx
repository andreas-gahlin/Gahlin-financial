import * as React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { Data } from '../types/types';
import Post from '../components/post';
import { Container, Row, Col } from 'reactstrap';

const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  const [visiblePosts, setVisiblePosts] = React.useState(3); // Initially display 3 posts
  const [posts, setPosts] = React.useState(data.allMarkdownRemark.edges);

  // Function to load more posts when scrolling
  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3); // Increase by 3 posts
  };

  return (
    <Layout>
      <Container className="py-5">
      <Row>
        <Col>
          <h4 className="mb-4">Latest Posts</h4>
        </Col>
      </Row>
      <Row className="mb-4">
        {posts.slice(0, visiblePosts).map(({ node: post }) => (
          <Col key={post.id} md="4">
            <Post 
              title={post.frontmatter.title} 
              authorimage={post.frontmatter.authorimage.childImageSharp.fluid} 
              date={post.frontmatter.date} 
              author={post.frontmatter.author} 
              tags={post.frontmatter.tags}
              path={post.fields.slug}
              fluid={post.frontmatter.image.childImageSharp.fluid}
            />
          </Col>
        ))}
      </Row>
        {visiblePosts < posts.length && ( // Render button if there are more posts to load
          <div className="text-center mt-3">
            <button className="btn btn-outline-dark" onClick={loadMorePosts}>
              Load More
            </button>
          </div>
        )}
      </Container>
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
            author
            tags
            date(formatString: "MMM Do YYYY")
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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`;

export default IndexPage;
