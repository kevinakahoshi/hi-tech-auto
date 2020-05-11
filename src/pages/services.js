import React, {
  useState,
  useEffect
} from "react";
import {
  Link,
  useStaticQuery,
  graphql
} from "gatsby";
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroBanner from '../components/hero-banner';
import ServiceCard from '../components/service-card';

const Services = () => {
  const [phoneButton, setPhoneButton] = useState(false);
  const h1Text = 'Services Offered';

  useEffect(() => {
    global.addEventListener('resize', () => {
      if (global.innerWidth < 768) {
        setPhoneButton(true);
      } else {
        setPhoneButton(false);
      }
    });

    return () => {
      global.removeEventListener('resize', () => {});
    }
  });

  const imageData = useStaticQuery(graphql `
    query ServiceImages {
      hero: file(relativeDirectory: {
        eq: "services/hero"
      }, name: {
        eq: "hero"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brakeService: file(relativeDirectory: {
        eq: "services/service-cards"
      }, name: {
        eq: "brake-service"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tireRotations: file(relativeDirectory: {
        eq: "services/service-cards"
      }, name: {
        eq: "tire-rotations"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      oilChanges: file(relativeDirectory: {
        eq: "services/service-cards"
      }, name: {
        eq: "oil-changes"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      engineRepair: file(relativeDirectory: {
        eq: "services/service-cards"
      }, name: {
        eq: "engine-repair"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      transmissionService: file(relativeDirectory: {
        eq: "services/service-cards"
      }, name: {
        eq: "transmission-service"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tuneUp: file(relativeDirectory: {
        eq: "services/service-cards"
      }, name: {
        eq: "tune-up"
      }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const listOfServices = [
    {
      id: imageData.brakeService.id,
      title: 'Brake Service',
      description: 'Your brakes are one of the most critical components on your vehicle that will keep you, your passengers, and others on the road safe.  If your brakes are showing signs of wear, or are making squealing or grinding noises, give us a call today!',
      image: imageData.brakeService.childImageSharp.fluid
    },
    {
      id: imageData.tireRotations.id,
      title: 'Tire Rotations',
      description: 'Your tires are another component that is critical for keeping you safe on the road.  Rotating them regularly will help preserve their longevity, and keep you planted on the road, in control.',
      image: imageData.tireRotations.childImageSharp.fluid
    },
    {
      id: imageData.oilChanges.id,
      title: 'Oil Changes',
      description: 'Oil changes will help keep your car\'s engine running strong for years to come by keeping your internal components lubricated and friction free.  Contact us about your next oil change.',
      image: imageData.oilChanges.childImageSharp.fluid
    },
    {
      id: imageData.engineRepair.id,
      title: 'Engine Repair',
      description: 'Is your Check Engine Light on?  If so, it\'s time to get that checked out by a professional.  We are well equipped to diagnose and address any engine issues that you may be facing, and we are here to help.  Stop by today to see what may be wrong.',
      image: imageData.engineRepair.childImageSharp.fluid
    }, {
      id: imageData.transmissionService.id,
      title: 'Transmission Service',
      description: 'If you notice that your transmission is slipping or changing gears is jerky, it\'s time to look into why.  Transmission problems can leave you stranded on the side of the road, so contact us at the first signs of your transmission acting strangely.',
      image: imageData.transmissionService.childImageSharp.fluid
    }, {
      id: imageData.tuneUp.id,
      title: 'Tune Up',
      description: 'Preventative maintenance like changing your fluids, checking/replacing your battery, or changing your spark plugs is an easy way to keep your car from breaking down over time.  If you\'re in need of a tune up, give us a call or stop by today.',
      image: imageData.tuneUp.childImageSharp.fluid
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
            page={'service'} />
        </Col>
      )
    });

  return (
    <Layout>
      <SEO title="About" />
      <HeroBanner
        heroImage={imageData.hero.childImageSharp.fluid}
        index={false}
        h1Text={h1Text}
        h2Text={false} />
      <section
        id="services-description"
        className="bg-white py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                <h3>
                  Hi-Tech Auto Services
                </h3>
                <p>
                  Hi-Tech Auto specializes in general automotive maintenance and repair.
                  We can service a wide range of makes and models, and are equipped to handle a broad range of services quickly and easily.
                  Our ASE Certified technicians have over 25 years of experience, and are ready to handle your maintenance and repair needs.
                  Call today to inquire!
                </p>
              </Col>
            </Row>
          </Container>
      </section>
      <section
        id="services-offered"
        className="bg-light py-5">
          <Container>
            <Row>
              <Col
                xs={12}>
                  <h3
                    className="text-center mb-3">
                    Our Services
                  </h3>
              </Col>
              {serviceCards}
              <Col
                xs={12}
                className="d-flex justify-content-center">
                {phoneButton
                  ? <a
                      href="tel:+16264431788"
                      className="hi-tech-button btn btn-primary m-auto">
                      Give Us a Call Today
                    </a>
                  : <Link
                      className="hi-tech-button btn btn-primary m-auto"
                      to='/contact/'>
                        Give Us a Call Today
                    </Link>}
              </Col>
            </Row>
          </Container>
      </section>
    </Layout>
  )
}

export default Services
