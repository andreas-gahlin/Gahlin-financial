import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"


// style={pageStyles}
const IndexPage: React.FC = () => {
  return (
    <Layout>
        <h1 className="mt-5 mb-4">Latest Blog Posts</h1>
    </Layout>
  );
};


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
