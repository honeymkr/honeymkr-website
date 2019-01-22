require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "HONEYMKR",
    author: "Jason Faulkner",
    description: "Motion Design & Web Apps."
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {

      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    
    
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
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

