import React from "react"

import {
  Container,
  Row,
  Col
} from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from '../components/hero-banner';
import {
  Link,
  useStaticQuery,
  graphql
} from "gatsby";


const NotFoundPage = () => {
  const imageData = useStaticQuery(graphql `
    query NotFound {
      hero: allFile(filter: {relativeDirectory: {
        eq: "404/hero"
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

  const h1Text = '404';
  const h2Text = 'Whoops!  How did you end up here?';

  return (
    <Layout>
      <SEO title="404: Not found" />
      <HeroBanner
        heroImage={imageData.hero.nodes[0].childImageSharp.fluid}
        h1Text={h1Text}
        h2Text={h2Text}
        index={false} />
      <Container
        className="bg-white py-5">
        <Row>
          <Col
            className="d-flex justify-content-center">
            <Link
              className="btn hi-tech-button"
              to="/">
                Return Home
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
