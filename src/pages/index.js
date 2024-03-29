import React, {
  useState
} from "react";
import {
  Link,
  useStaticQuery,
  graphql
} from "gatsby"
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

  const imageData = useStaticQuery(graphql `
    query IndexImages {
      hero: file(relativeDirectory: {
        eq: "home/hero"
      }, name: {
        eq: "hero"
      }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      oilChange: file(relativeDirectory: {
        eq: "home/service-cards"
      }, name: {
        eq: "oil-changes"
      }) {
        id
        childImageSharp {
          fluid(maxWidth: 688) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tireRotations: file(relativeDirectory: {
        eq: "home/service-cards"
      }, name: {
        eq: "tire-rotation"
      }) {
        id
        childImageSharp {
          fluid(maxWidth: 688) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brakeService: file(relativeDirectory: {
        eq: "home/service-cards"
      }, name: {
        eq: "brake-service"
      }) {
        id
        childImageSharp {
          fluid(maxWidth: 688) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallery: allFile(filter: {
        relativeDirectory: {
          eq: "home/gallery"
        }
      }) {
        nodes {
          childImageSharp {
            id
            fluid(maxWidth: 1170, ) {
              ...GatsbyImageSharpFluid_withWebp
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
      description: 'Overdue for a simple oil change?  Stop in or give us a call so that we can service your vehicle.',
      image: imageData.oilChange.childImageSharp.fluid
    },
    {
      id: 2,
      title: 'Tire Rotations',
      description: 'It\'s important to have your car\'s tires rotated periodically in order to preserve their longevity.  Come by the shop to have your tires rotated.',
      image: imageData.tireRotations.childImageSharp.fluid
    },
    {
      id: 3,
      title: 'Brake Service',
      description: 'Don\'t get caught in a situation where your brakes are not functioning like they should.  We are equipped to perform pad and rotor replacements so that you can drive safely.',
      image: imageData.brakeService.childImageSharp.fluid
    }
  ];

  const serviceCards =
    listOfServices.map(service => {
      return (
        <Col
          xs={12}
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
      <SEO title="Home" />
      <HeroBanner
        heroImage={imageData.hero.childImageSharp.fluid}
        h1Text={h1Text}
        h2Text={h2Text}
        index={true}
      />
      <section id="about" className="bg-white">
        <Container className="py-5">
          <Row>
            <Col xs={12}>
              <h3 className="h1">
                About Hi-Tech Auto
              </h3>
              <p>
                Hi-Tech Auto is a family-owned mechanic shop that is located in the heart of El Monte.
                We have been open since 2001 and specialize in general automotive maintenance and repair.
                One thing that we emphasize is that because we're family owned, we treat all of our customers like family.
                Whether you have a general question or are in need of a tune up, we'd love to hear from you!
              </p>
              <Link className="btn hi-tech-button" to="/about/">
                More About Us
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="services" className="bg-light">
        <Container className="py-5">
          <Row>
            <Col xs={12}>
              <h3 className="h1">
                Our Services
              </h3>
            </Col>
            {serviceCards}
            <Col xs={12}>
              <Link className="btn hi-tech-button" to="/services/">
                See All Services
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="gallery" className="bg-white">
        <Container fluid className="p-0">
          <Row noGutters={true}>
            <Gallery toggle={toggle} galleryImages={imageData.gallery.nodes} />
            <ImageModal
              toggle={toggle}
              modal={modal}
              modalImage={modalImage}
            />
            <div className="d-block d-sm-none">
              <ImageCarousel carouselImages={imageData.gallery.nodes} />
            </div>
          </Row>
        </Container>
      </section>
      <section id="contact" className="bg-white py-5">
        <Container>
          <Row>
            <Col xs={12}>
                <h4 className="h1 text-center">
                  Have questions for us?
                </h4>
                <h5 className="text-center mb-0">
                  Give us a call at <a href="tel:+16264431788" className="link">626-443-1788</a>
                </h5>
              </Col>
          </Row>
        </Container>
      </section>
    </Layout>
)};

export default IndexPage
