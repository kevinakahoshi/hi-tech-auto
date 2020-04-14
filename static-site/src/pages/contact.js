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
      allFile(filter: {relativeDirectory: {
        eq: "contact"
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
      <SEO title="Contact" />
      <HeroBanner
        heroImage={imageData.allFile.nodes[0].childImageSharp.fluid}
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col
                xs={12}
                md={4}>
                  <div
                    className="p-3 border rounded bg-light text-center mb-3">
                    <h3>
                      Phone
                    </h3>
                    <a
                      href="tel:+16264481733"
                      className="btn btn-primary w-100">
                      626-448-1733
                    </a>
                  </div>
              </Col>
              <Col
                xs={12}
                md={4}>
                  <div
                    className="p-3 border rounded bg-light text-center mb-3">
                    <h3>
                      Address
                    </h3>
                    <p
                      className="mb-0">
                      Hi-Tech Auto <br />
                      4534 Baldwin Ave, <br />
                      El Monte, CA 91731
                    </p>
                  </div>
              </Col>
            </Row>
          </Container>
      </section>
    </Layout>
  )
}

export default Contact;
