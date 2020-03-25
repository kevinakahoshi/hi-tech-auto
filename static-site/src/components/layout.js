/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import Header from "./header";
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
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <footer
        className="bg-light py-5">
        <Container>
          <Row>
            <Col
              xs={12}>
                <p
                  className="text-center mb-0">Hi-Tech Auto © {new Date().getFullYear()}</p>
              </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
