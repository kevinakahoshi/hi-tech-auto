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
        className="bg-white py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                <h3>
                  What makes Hi-Tech Auto Special?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci. Sem integer vitae justo eget magna. Egestas maecenas pharetra convallis posuere morbi. Adipiscing elit ut aliquam purus sit amet. A scelerisque purus semper eget duis at tellus at urna. Quis varius quam quisque id. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Nisi quis eleifend quam adipiscing vitae. Enim blandit volutpat maecenas volutpat. Id neque aliquam vestibulum morbi blandit cursus risus.
                </p>
              </Col>
            </Row>
          </Container>
      </section>
    </Layout>
  )
}

export default About
