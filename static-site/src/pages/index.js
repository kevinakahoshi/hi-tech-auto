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
          </Col>
          <Col
            className="mb-3"
            lg={4}
            md={6}
            sm={12}>
              <Card
                className="border rounded bg-white shadow-lg h-100">
                <CardBody>
                  <CardTitle>
                    <h3>
                      Oil Changes
                    </h3>
                  </CardTitle>
                  <CardText>
                    Ultrices dui sapien eget mi proin sed libero enim.Senectus et netus et malesuada fames.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col
              className="mb-3"
            lg={4}
            md={6}
            sm={12}>
              <Card
                className="border rounded bg-white shadow-lg h-100">
                <CardBody>
                  <CardTitle>
                    <h3>
                      Tire Rotations
                    </h3>
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col
              className="mb-3"
              lg={4}
              md={6}
              sm={12}>
              <Card
                className="border rounded bg-white shadow-lg h-100">
                <CardBody>
                  <CardTitle>
                    <h3>
                      Alignment
                    </h3>
                  </CardTitle>
                  <CardText>
                    At tellus at urna condimentum mattis pellentesque id nibh.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col
            xs={12}>
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
