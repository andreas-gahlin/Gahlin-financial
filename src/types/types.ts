
export interface Node {
  id: string
  frontmatter: Frontmatter
  fields: {
    slug: string
  }
  excerpt: string;
}

export interface Frontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: ImageData; // Reference the ImageData interface for the image field
  authorimage: ImageData; // Reference the ImageData interface for the image field

}

// Define TypeScript types/interfaces
export interface ImageData {
  childImageSharp: {
    fluid: any; // Adjust this type according to your specific needs
  };
}

export interface Data {
  allMarkdownRemark: {
    edges: {
      node: Node
    }[]
  };
}
