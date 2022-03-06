require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `JM Nails Spa Salon`,
    siteUrl: `https://www.jmnailspa.ca`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token:
          token ||
          "sklkKr8W6rVz6NNdHXIGoGEvzrTnDNnjENnxNr4q3g81gKFiULPyigmjPlXgr5JhQmB07j37naUK5FWWwQUNZvWnOidjzGqn1W7EGS94jixcRTaiWkVMlIgXNwVU4ULigZyjlOq28T5mtLrlln7QP0MmepUrmRcudjzYvIZpXzHLIowk0DaQ",
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `JM Nails Salon`,
        short_name: `jmnails`,
        start_url: `/`,
        background_color: `#eeccc7`,
        theme_color: `#eeccc7`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        // isUsingColorMode: true,
      },
    },
  ],
};
