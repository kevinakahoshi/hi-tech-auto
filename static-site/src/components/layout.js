/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from './footer';
import MessageBanner from './message-banner';
import "./layout.css";
import "./custom.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [closeMessageBanner, setCloseMessageBanner] = React.useState(false);

  const closeBar = () => {
    setCloseMessageBanner(true);
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title} />
        <main>
        {closeMessageBanner
          ? null
          : <MessageBanner
              closeBar={closeBar} />}
          {children}
        </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
