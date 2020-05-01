import React from "react";
import {
  // Link,
  useStaticQuery,
  graphql
} from "gatsby";
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroBanner from '../components/hero-banner';

const About = () => {
  const h1Text = 'About Hi-Tech Auto'

  const imageData = useStaticQuery(graphql `
    query AboutImages {
      allFile(filter: {relativeDirectory: {
        eq: "about"
      }}) {
        nodes {
          childImageSharp {
            id
            fluid(maxWidth: 1920,) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" />
      <HeroBanner
        heroImage={imageData.allFile.nodes[0].childImageSharp.fluid}
        index={false}
        h1Text={h1Text}
        h2Text={false} />
      <section
        id="about-hi-tech-auto"
        className="bg-white py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                <h3>
                  What makes Hi-Tech Auto Special?
                </h3>
                <p>
                  Hi-Tech Auto focuses on provideing the best possible service at the best possible price.
                  Since we are family owned, we always treat our customers like we would a family member stopping by.
                  Many of our customers are repeat customers that have been coming to us for years, and that is because we treat them like family.
                  Hi-Tech Auto has been open since 2001, and we have always made it a point to be honest with our customers since opening.
                </p>
              </Col>
            </Row>
          </Container>
      </section>
      <section
        id="logo-section"
        className="bg-dark py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                  <h3
                    className="text-white text-center mb-3">
                    Our Value
                  </h3>
              </Col>
              <Col
                xs={6}
                md={3}>
                <div
                  className="value-props rounded p-3 my-3">
                  <svg
                    className="bi bi-people text-white d-block mx-auto"
                    width="2.5rem"
                    height="2.5rem"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                      <path
                      fillRule="evenodd"
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002.002zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z"
                      clipRule="evenodd"/>
                  </svg>
                  <h6
                    className="text-white text-center mt-3">
                      Family Owned
                  </h6>
                </div>
              </Col>
              <Col
                xs={6}
                md={3}>
                <div
                  className="value-props rounded p-3 my-3">
                  <svg
                    className="bi bi-wrench text-white d-block mx-auto"
                    width="2.5rem"
                    height="2.5rem"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M.102 2.223A3.004 3.004 0 003.78 5.897l6.341 6.252A3.003 3.003 0 0013 16a3 3 0 10-.851-5.878L5.897 3.781A3.004 3.004 0 002.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"
                      clipRule="evenodd"/>
                  </svg>
                  <h6
                    className="text-white text-center mt-3">
                      Experienced
                  </h6>
                </div>
              </Col>
              <Col
                xs={6}
                md={3}>
                <div
                  className="value-props rounded p-3 my-3">
                  <svg
                    className="bi bi-heart text-white d-block mx-auto"
                    width="2.5rem"
                    height="2.5rem"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
                      clipRule="evenodd"/>
                  </svg>
                  <h6
                    className="text-white text-center mt-3">
                      Friendly
                  </h6>
                </div>
              </Col>
              <Col
                xs={6}
                md={3}>
                <div
                  className="value-props rounded p-3 my-3">
                  <svg
                    className="bi bi-wallet text-white d-block mx-auto"
                    width="2.5rem"
                    height="2.5rem"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M1.5 3a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM15 6.5h-4.551a2.678 2.678 0 01-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 015.551 6.5H1v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9z"
                      clipRule="evenodd"/>
                  </svg>
                  <h6
                    className="text-white text-center mt-3">
                      Affordable
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </Layout>
  )
}

export default About
