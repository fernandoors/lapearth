module.exports = {
  siteMetadata: {
    title: `Lap of the Earth`,
    description: `Show how many objects are necessary to complete one Lap of the Earth. Ex. How many Cards to compleate a Lap of the Earth`,
    author: `@fernandoors and @BrPadilha`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5085086136982290`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GA_TRACKING_ID,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
