import { GatsbyNode } from 'gatsby';
import slugify from 'slugify';
import path from 'path'

export interface Node {
  id: string
  frontmatter: {
    title: string
    description: string
    date: Date
  }
  fields: {
    slug: string
  }
  excerpt: string;
}

export interface Data {
  allMarkdownRemark: {
    nodes: Node[]
  };
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // Add fields to MarkdownRemark nodes
  if (node.internal.type === 'MarkdownRemark') {
    const slugNode = node as any;
    const slug =   slugify(slugNode.frontmatter.title, { lower: true });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query markdown data to get necessary information for generating pages
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const resultData = result.data as Data;
  // Create pages for each markdown node
  resultData.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug, // Path for the page
      component: path.resolve('./src/templates/blog-post.tsx'), // Template component for the page
      context: {
        // Additional data to pass to the template component
        slug: node.fields.slug,
      },
    });
  });
};
