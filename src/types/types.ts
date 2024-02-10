
export interface Node {
  id: string
  frontmatter: {
    title: string
    description: string
    date: string
    image: string
  }
  fields: {
    slug: string
  }
  excerpt: string;
}

export interface Data {
  allMarkdownRemark: {
    edges: {
      node: Node
    }[]
  };
}
