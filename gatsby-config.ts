import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gåhlin financial',
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'icon',
        icon: `src/images/icon.png`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-image',
    'gatsby-plugin-react-helmet',
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogposts',
        path: `${__dirname}/src/content/blog`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: { extensions: ['.mdx', '.md']},
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
  ],
}

export default config
