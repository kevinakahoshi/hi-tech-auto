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
  useStaticQuery,
  graphql
} from "gatsby";


const NotFoundPage = () => {
  const imageData = useStaticQuery(graphql `
    query NotFound {
      hero: allFile(filter: {relativeDirectory: {
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
    </Layout>
  )
}

export default NotFoundPage
