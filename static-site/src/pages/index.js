import React, {
  useState
} from "react";
import {
  Link,
  useStaticQuery,
  graphql
} from "gatsby"
// import Img from "gatsby-image";
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout'
import HeroBanner from '../components/hero-banner';
import Gallery from '../components/gallery';
import ImageCarousel from '../components/image-carousel';
import ImageModal from '../components/image-modal';
import ServiceCard from '../components/service-card';
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

  const listOfServices = [
    {
      id: 1,
      title: 'Oil Change',
      description: 'Urna duis convallis convallis tellus id interdum. Dis parturient montes nascetur ridiculus. In fermentum et sollicitudin ac orci phasellus. Elit eget gravida cum sociis natoque.',
      image: imageData.allFile.nodes[1].childImageSharp.fluid
    },
    {
      id: 2,
      title: 'Tire Rotations',
      description: 'Sagittis vitae et leo duis ut diam quam nulla. Quisque egestas diam in arcu cursus euismod quis viverra. Et odio pellentesque diam volutpat commodo sed egestas egestas.',
      image: imageData.allFile.nodes[2].childImageSharp.fluid
    },
    {
      id: 3,
      title: 'Brake Service',
      description: 'Aliquet eget sit amet tellus cras. Tellus id interdum velit laoreet id donec ultrices. Tristique magna sit amet purus gravida quis blandit turpis. Sapien et ligula ullamcorper malesuada proin libero nunc. Aliquam sem fringilla ut morbi tincidunt.',
      image: imageData.allFile.nodes[3].childImageSharp.fluid
    }
  ];

  const serviceCards =
    listOfServices.map(service => {
      return (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="mb-4"
          key={service.id}>
          <ServiceCard
            title={`${service.title}`}
            description={service.description}
            image={service.image}
            page={'index'} />
        </Col>
      )
    });

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
                  Hi-Tech Auto is a family-owned mechanic shop that is located in the heart of El Monte.
                  We have been open since 1995 and specialize in general automotive maintenance and repair.
                  One thing that we emphasize is that because we're family owned, we treat all of our customers family.
                  Whether you have a general question or are in need of a tune up, we'd love to hear from you!
                </p>
                <Link
                  className="btn hi-tech-button"
                  to="/about/">
                    Learn More
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
              {serviceCards}
              <Col
              xs={12}>
                <Link
                className="btn hi-tech-button"
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
                      Give us a call at <a href="tel:+16264481733" className="link">626-448-1733</a>
                  </h5>
                </Col>
            </Row>
          </Container>
      </section>
    </Layout>
)};

export default IndexPage
