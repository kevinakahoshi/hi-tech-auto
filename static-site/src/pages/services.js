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
      title: 'Oil Change',
      description: 'Urna duis convallis convallis tellus id interdum. Dis parturient montes nascetur ridiculus. In fermentum et sollicitudin ac orci phasellus. Elit eget gravida cum sociis natoque.',
      image: imageData.cards.nodes[5].childImageSharp.fluid
    },
    {
      id: 2,
      title: 'Tire Rotations',
      description: 'Sagittis vitae et leo duis ut diam quam nulla. Quisque egestas diam in arcu cursus euismod quis viverra. Et odio pellentesque diam volutpat commodo sed egestas egestas.',
      image: imageData.cards.nodes[4].childImageSharp.fluid
    },
    {
      id: 3,
      title: 'Brake Service',
      description: 'Aliquet eget sit amet tellus cras. Tellus id interdum velit laoreet id donec ultrices. Tristique magna sit amet purus gravida quis blandit turpis. Sapien et ligula ullamcorper malesuada proin libero nunc. Aliquam sem fringilla ut morbi tincidunt.',
      image: imageData.cards.nodes[1].childImageSharp.fluid
    },
    {
      id: 4,
      title: 'Engine Repair',
      description: 'Vitae et leo duis ut diam. Ac placerat vestibulum lectus mauris. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Consequat interdum varius sit amet mattis vulputate enim. At lectus urna duis convallis convallis tellus id interdum.',
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
