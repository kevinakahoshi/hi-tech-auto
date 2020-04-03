import React from "react";
import {
  Link,
  useStaticQuery,
  graphql
} from "gatsby"
import BackgroundImage from 'gatsby-background-image';
import Img from "gatsby-image";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
// import Gallery from '../components/gallery';
import ImageCarousel from '../components/image-carousel';
import SEO from "../components/seo";

const IndexPage = () => {
  const imageData = useStaticQuery(graphql`
    query AllImages {
      allFile(filter: {relativeDirectory: {
        eq: "home"
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
      <SEO
        title="Home" />
      <BackgroundImage
        id="hero-banner"
        fadeIn={true}
        Tag="div"
        className="d-flex position-relative hero-banner"
        fluid={imageData.allFile.nodes[1].childImageSharp.fluid} >
          <Container
            className="py-5 m-auto">
            <Row
              className="align-items-center">
              <Col
                xs={12}>
                <div
                  className="m-auto">
                  <h1
                    className="text-center text-white">
                      Hi-Tech Auto
                  </h1>
                  <h2
                    className="text-center text-white">
                      General Automotive Repair and Service in El Monte, CA
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
          <div
            className="position-absolute d-flex w-100 down-scroll-container">
            <div
              className="m-auto text-white">
              <svg className="bi bi-chevron-compact-down down-scroll-arrow"
                width="2rem"
                height="2rem"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z"
                    clipRule="evenodd"/>
              </svg>
            </div>
          </div>
      </BackgroundImage>
      <section
        id="about"
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
      </section>
      <section
        id="services"
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
                  className="border rounded bg-white h-100">
                  <Img
                    className="rounded-top image-angle"
                    fluid={imageData.allFile.nodes[2].childImageSharp.fluid} />
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
                  className="border rounded bg-white h-100 five-hover">
                  <Img
                    className="rounded-top image-angle"
                    fluid={imageData.allFile.nodes[3].childImageSharp.fluid} />
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
                  className="border rounded bg-white h-100 five-hover">
                  <Img
                    className="rounded-top image-angle"
                    fluid={imageData.allFile.nodes[4].childImageSharp.fluid} />
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
      </section>
      <section
        id="gallery"
        className="bg-white">
        <Container
          fluid
          className="p-0">
          <Row
            noGutters={true}>
              {/* <Gallery
                galleryImages={imageData.allFile.nodes} /> */}
              <ImageCarousel
                carouselImages={imageData.allFile.nodes} />
          </Row>
        </Container>
      </section>
    </Layout>
)};

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

//   return (
//   <Img
//     className="rounded-top image-angle"
//     fluid={data.placeholderImage.childImageSharp.fluid} />
//   )
// }

export default IndexPage
