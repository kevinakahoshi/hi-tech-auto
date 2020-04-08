import React from "react";
import {
  // Link,
  useStaticQuery,
  graphql
} from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroBanner from '../components/hero-banner';

const About = () => {
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
        index={false}
        heroImage={imageData.allFile.nodes[0].childImageSharp.fluid} />
    </Layout>
  )
}

export default About
