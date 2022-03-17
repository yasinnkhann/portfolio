module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Catamaran`,
          `limelight`,
          `sans-serif`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
