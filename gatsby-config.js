module.exports = {
  siteMetadata: {
    title: "HONEYMKR",
    author: "Jason Faulkner",
    description: "Web development and animation."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Honeymkr',
        short_name: 'honeymkr',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/honeymkr-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-104685851-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "www.honeymkr.com",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

