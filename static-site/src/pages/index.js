import React from "react";
// import {
//   useStaticQuery,
//   graphql
// } from "gatsby"
import Img from "gatsby-image";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import Images from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {Images[0]}
  </Layout>
)

// const Image = () => {
//   const data = useStaticQuery(graphql `
//     query {
//       placeholderImage: file(relativePath: { eq: "tools.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 1920) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   return <Img fluid = {
//     data.placeholderImage.childImageSharp.fluid
//   }
//   />
// }

export default IndexPage
