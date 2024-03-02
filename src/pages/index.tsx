import * as React from 'react';
import { graphql, Link } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../components/layout';
import { Data } from '../types/types';
import Post from '../components/post';
import { Container, Row, Col } from 'reactstrap';
import PortfolioSummary from '../components/portfoliopage'; // Import the PortfolioSummary component
import slugify from 'slugify';
import Subject from '../components/subject';


const IndexPage: React.FC<PageProps<Data>> = ({ data }) => {
  const [visiblePosts, setVisiblePosts] = React.useState(3);
  const [posts,] = React.useState(data.allMarkdownRemark.edges);
  
  const tagsSet = new Set(posts.flatMap(({ node: post }) => post.frontmatter.tags));
  const tags = Array.from(tagsSet);

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
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
        {visiblePosts < posts.length && (
          <div className="text-center mb-4">
            <button className="btn btn-outline-dark" onClick={loadMorePosts}>
              Load More
            </button>
          </div>
        )}

        <Row className="mb-4">
          <Col>
            <h5>Subjects:</h5> {/* Add a title for the tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}> {/* Use flexbox to wrap items */}
              {tags.map((tag, index) => (
                <Link key={index} to={slugify(tag, { lower: true })} style={{ marginRight: '1px' }}> {/* Add style for margin */}
                  <Subject tag={tag} />
                </Link>
              ))}
            </div>
          </Col>
        </Row>

        <PortfolioSummary /> {/* Add the PortfolioSummary component */}
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
