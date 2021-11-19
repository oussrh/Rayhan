
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
    `gatsby-plugin-offline`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-96912991-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
        // // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ]
}
