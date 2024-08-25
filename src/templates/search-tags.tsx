import React, { Context } from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import type { Page, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post'; // Assuming you have a Post component to display individual posts

interface Data {
  allMarkdownRemark: {
    edges: Array<Edge>
  }
}

interface Edge {
  node: Node
}

interface Node {
  id: string
  frontmatter: {
    title: string
    description: string
    date: string
    author: string
    tags: string[]
    image: any
    authorimage: any
  }
  fields: any // slug attribute as string
  excerpt: string
}

const BlogPostTemplate: React.FC<PageProps<Data>> = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Container className="py-5">
        <Row>
          <Col>
            <h4 className="mb-4">Posts Tagged with {edges[0].node.frontmatter.tags[0]}</h4>
          </Col>
        </Row>
        <Row className="mb-4">
          {edges.map(({ node: post }) => (
            <Col key={post.id} md="4">
              <div>{post.fields.slug}</div>
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
      </Container>
    </Layout>
  );
};
 

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMM Do YYYY")
            author
            tags
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

export default BlogPostTemplate;
