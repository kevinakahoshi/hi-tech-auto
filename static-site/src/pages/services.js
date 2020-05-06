import React, {
  useState,
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

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setPhoneButton(true);
    } else {
      setPhoneButton(false);
    }
  });

  const imageData = useStaticQuery(graphql `
    query ServiceImages {
      main: allFile(filter: {relativeDirectory: {
        eq: "services"
      }}) {
        nodes {
          childImageSharp {
            id
            fluid(maxWidth: 1920,) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
      cards: allFile(filter: {relativeDirectory: {
        eq: "services/service-cards"
      }}) {
        nodes {
          childImageSharp {
            id
            fluid(maxWidth: 1920, ) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  `);

  const listOfServices = [
    {
      id: 1,
      title: 'Brake Service',
      description: 'Your brakes are one of the most critical components on your vehicle that will keep you, your passengers, and others on the road safe.  If your brakes are showing signs of wear, or are making squealing or grinding noises, give us a call today!',
      image: imageData.cards.nodes[1].childImageSharp.fluid
    },
    {
      id: 2,
      title: 'Tire Rotations',
      description: 'Your tires are another component that is critical for keeping you safe on the road.  Rotating them regularly will help preserve their longevity, and keep you planted on the road, in control.',
      image: imageData.cards.nodes[4].childImageSharp.fluid
    },
    {
      id: 3,
      title: 'Oil Change',
      description: 'Preventative maintenance will help keep your car\'s engine running strong for years to come by keeping your internal components lubricated and friction free.  Contact us about your next oil change.',
      image: imageData.cards.nodes[5].childImageSharp.fluid
    },
    {
      id: 4,
      title: 'Engine Repair',
      description: 'Is your Check Engine Light on?  If so, it\'s time to get that checked out by a professional.  We are well equipped to diagnose and address any engine issues that you may be facing, and we are here to help.  Stop by today to see what may be wrong.',
      image: imageData.cards.nodes[2].childImageSharp.fluid
    }, {
      id: 5,
      title: 'Transmission Service',
      description: 'Congue mauris rhoncus aenean vel elit. Quam vulputate dignissim suspendisse in est ante. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tristique magna sit amet purus gravida quis blandit turpis.',
      image: imageData.cards.nodes[3].childImageSharp.fluid
    }, {
      id: 6,
      title: 'Tune Up',
      description: 'Vitae semper quis lectus nulla at volutpat diam. Ac ut consequat semper viverra nam libero. Iaculis at erat pellentesque adipiscing commodo elit. Praesent elementum facilisis leo vel.',
      image: imageData.cards.nodes[0].childImageSharp.fluid
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
        heroImage={imageData.main.nodes[0].childImageSharp.fluid}
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
                  Vitae et leo duis ut diam. Ac placerat vestibulum lectus mauris. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Consequat interdum varius sit amet mattis vulputate enim. At lectus urna duis convallis convallis tellus id interdum. Congue mauris rhoncus aenean vel elit. Quam vulputate dignissim suspendisse in est ante. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tristique magna sit amet purus gravida quis blandit turpis. Vitae semper quis lectus nulla at volutpat diam. Ac ut consequat semper viverra nam libero. Iaculis at erat pellentesque adipiscing commodo elit. Praesent elementum facilisis leo vel. Eu non diam phasellus vestibulum lorem. Tristique nulla aliquet enim tortor at auctor urna. Quam quisque id diam vel quam elementum pulvinar etiam non. At lectus urna duis convallis convallis tellus id interdum velit. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut.
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
