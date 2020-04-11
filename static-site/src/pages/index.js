import React, {
  useState
} from "react";
import {
  Link,
  useStaticQuery,
  graphql
} from "gatsby"
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

import Layout from '../components/layout'
import HeroBanner from '../components/hero-banner';
import Gallery from '../components/gallery';
import ImageCarousel from '../components/image-carousel';
import ImageModal from '../components/image-modal';
import SEO from '../components/seo';

const IndexPage = () => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const h1Text = 'Hi-Tech Auto';
  const h2Text = 'General Automotive Repair and Service in El Monte, CA';

  const toggle = image => {
    if (modal) {
      setTimeout(() => {
        setModalImage(null);
      }, 500)
    } else {
      setModalImage(image);
    }
    setModal(!modal)
  };

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
      <HeroBanner
        heroImage={imageData.allFile.nodes[1].childImageSharp.fluid}
        h1Text={h1Text}
        h2Text={h2Text}
        index={true} />
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
                  Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Sagittis eu volutpat odio facilisis mauris sit. Nisl suscipit adipiscing bibendum est. Adipiscing enim eu turpis egestas pretium aenean pharetra. Aliquam sem et tortor consequat id porta. Volutpat odio facilisis mauris sit. Mattis rhoncus urna neque viverra. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Non arcu risus quis varius. Lacinia at quis risus sed vulputate odio ut enim blandit. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Quisque id diam vel quam elementum.
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
                  className="service-card-index border rounded bg-white h-100">
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
                  className="service-card-index border rounded bg-white h-100">
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
                  className="service-card-index border rounded bg-white h-100">
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
              <Gallery
                toggle={toggle}
                galleryImages={imageData.allFile.nodes} />
              <ImageModal
                toggle={toggle}
                modal={modal}
                modalImage={modalImage} />
              <div
                className="d-block d-sm-none">
                <ImageCarousel
                  carouselImages={imageData.allFile.nodes} />
              </div>
          </Row>
        </Container>
      </section>
      <section
        className="bg-white py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                  <h4
                    className="h1 text-center">
                      Have questions for us?
                  </h4>
                  <h5
                    className="text-center mb-0">
                      Give us a call at <a href="tel:+16264481733">626-448-1733</a>
                  </h5>
                </Col>
            </Row>
          </Container>
      </section>
    </Layout>
)};

export default IndexPage
