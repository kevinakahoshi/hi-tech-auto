import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql `
    query Logo {
      logo: allFile(filter: {name: {
        eq: "logo"
      }}) {
        nodes {
          childImageSharp {
            id
            fixed(width: 200, ) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Img
      backgroundColor="#ffffff"
      fixed={data.logo.nodes[0].childImageSharp.fixed} />
  );
}

export default Logo;
