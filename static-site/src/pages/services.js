import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Services page</h1>
    <p>Welcome to Services</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services