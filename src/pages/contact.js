import React from "react";
import {
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

const Contact = () => {
  const h1Text = 'Contact Us'

  const imageData = useStaticQuery(graphql `
    query ContactImages {
      hero: file(relativeDirectory: {
        eq: "contact/hero"
      }, name: {
        eq: "hero"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Contact" />
      <HeroBanner
        heroImage={imageData.hero.childImageSharp.fluid}
        index={false}
        h1Text={h1Text}
        h2Text={false} />
      <section
        id="contact-us"
        className="bg-white py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                <h3>
                  Want to get in touch with us?
                </h3>
              </Col>
              <Col
                xs={12}
                md={6}>
                  <div
                    className="p-3 border rounded bg-light text-center mb-3">
                    <a
                      href="tel:+16264481733"
                      className="btn hi-tech-button w-100">
                        Give Us a Call
                    </a>
                  </div>
              </Col>
              <Col
                xs={12}
                md={6}>
                  <div
                    className="p-3 border rounded bg-light text-center mb-3">
                    <a
                      href="https://goo.gl/maps/FPit6BzCJBE5aPV38"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn hi-tech-button w-100">
                        Stop By the Shop
                    </a>
                  </div>
              </Col>
            </Row>
          </Container>
      </section>
    </Layout>
  )
}

export default Contact;
