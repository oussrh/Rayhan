
const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.rayhan.eu`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:"imgs",
        path: `${__dirname}/src/imgs/`
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rayhan.eu',
        sitemap: 'https://www.rayhan.eu/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.rayhan.eu`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Radio Rayhan",
        short_name: "Rayhan",
        description:"Radio Rayhan is a web radio station dedicated to Quran recitation, meaningful songs, Prophets biography, and a variety of lessons and wisdom.",
        start_url: "/",
        background_color: "#000",
        theme_color: "#ffebcd",
        display: "standalone",
        icon: "src/imgs/logo.png",
        crossOrigin: `use-credentials`,
      }
    },
    {
      resolve: `gatsby-remark-twitter-cards`,
      options: {
        title: "Radio Rayhan",
        separator: "|",
        author: "Radio Rayhan",
        background: require.resolve("./src/imgs/logo.png"),
        fontColor: "#ffebcd",
        titleFontSize: 96,
        subtitleFontSize: 60,
        fontStyle: "monospace",
      },
    },
  ]
}
