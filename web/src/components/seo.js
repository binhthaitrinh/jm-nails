import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

function SEO({ description, lang, title, openGraph }) {
  const metaDescription = description || "";
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate="%s"
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: "Kyle Trinh",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "og:image",
          content: openGraph,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
