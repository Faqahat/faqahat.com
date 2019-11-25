module.exports = {
  siteMetadata: {
    title: `Hi I'm Faqahat`,
    description: ``,
    author: `@faqahat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `faqahat-web`,
        short_name: `faqahat`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/zeit-black-triangle.svg`, // This path is relative to the root of the site.
      },
    }

  ],
}
