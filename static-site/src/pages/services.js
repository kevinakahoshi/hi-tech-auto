import React from "react";
import {
  // Link,
  useStaticQuery,
  graphql
} from "gatsby";
import Img from 'gatsby-image';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroBanner from '../components/hero-banner';
import ServiceCard from '../components/service-card';

const Services = () => {
  const h1Text = 'Services Offered'

  const imageData = useStaticQuery(graphql `
    query ServiceImages {
      allFile(filter: {relativeDirectory: {
        eq: "services"
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
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
      image: imageData.allFile.nodes[0].childImageSharp.fluid
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
      image: imageData.allFile.nodes[0].childImageSharp.fluid
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum',
      image: imageData.allFile.nodes[0].childImageSharp.fluid
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
            title={service.title}
            description={service.description}
            image={service.image}
            page={'service'} />
        </Col>
      )
    })

  return (
    <Layout>
      <SEO title="About" />
      <HeroBanner
        heroImage={imageData.allFile.nodes[0].childImageSharp.fluid}
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
                    Our Value Props
                  </h3>
              </Col>
              {serviceCards}
            </Row>
          </Container>
      </section>
    </Layout>
  )
}

export default Services
