import React from "react";
import {
  Link
  // useStaticQuery,
  // graphql
} from "gatsby"
// import Img from "gatsby-image";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  // CardFooter,
  CardTitle,
  CardDeck
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
// import Images from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home" />
    {/* <Images /> */}
    <div
      className="bg-white">
      <Container
        className="py-5">
        <Row>
          <Col
            xs={12}>
              <h1>
                About Hi-Tech Auto
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
              </p>
              <Link
                className="btn btn-primary"
                to="/about/">
                  Our Mission
              </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <div
      className="bg-light">
      <Container
        className="py-5">
        <Row>
          <Col
            xs={12}>
            <h1>
              Our Services
            </h1>
            <CardDeck
              className="mb-4">
              <Card
                className="border rounded bg-white shadow-lg">
                <CardBody>
                  <CardTitle>
                    Lorem Ipsum
                  </CardTitle>
                  <CardText>
                    Lorem
                  </CardText>
                </CardBody>
              </Card>
              <Card
                className="border rounded bg-white shadow-lg">
                <CardBody>
                  <CardTitle>
                    Lorem Ipsum
                  </CardTitle>
                  <CardText>
                    Lorem
                  </CardText>
                </CardBody>
              </Card>
              <Card
                className="border rounded bg-white shadow-lg">
                <CardBody>
                  <CardTitle>
                    Lorem Ipsum
                  </CardTitle>
                  <CardText>
                    Lorem
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <Link
              className="btn btn-primary"
              to="/services/">
                See All Services
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
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
