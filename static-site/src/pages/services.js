import React from "react";
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
      title: 'Service',
      description: 'Urna duis convallis convallis tellus id interdum. Dis parturient montes nascetur ridiculus. In fermentum et sollicitudin ac orci phasellus. Elit eget gravida cum sociis natoque.',
      image: imageData.allFile.nodes[1].childImageSharp.fluid
    },
    {
      id: 2,
      title: 'Service',
      description: 'Sagittis vitae et leo duis ut diam quam nulla. Quisque egestas diam in arcu cursus euismod quis viverra. Et odio pellentesque diam volutpat commodo sed egestas egestas.',
      image: imageData.allFile.nodes[2].childImageSharp.fluid
    },
    {
      id: 3,
      title: 'Service',
      description: 'Aliquet eget sit amet tellus cras. Tellus id interdum velit laoreet id donec ultrices. Tristique magna sit amet purus gravida quis blandit turpis. Sapien et ligula ullamcorper malesuada proin libero nunc. Aliquam sem fringilla ut morbi tincidunt.',
      image: imageData.allFile.nodes[3].childImageSharp.fluid
    },
    {
      id: 4,
      title: 'Service',
      description: 'Vitae et leo duis ut diam. Ac placerat vestibulum lectus mauris. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Consequat interdum varius sit amet mattis vulputate enim. At lectus urna duis convallis convallis tellus id interdum.',
      image: imageData.allFile.nodes[4].childImageSharp.fluid
    }, {
      id: 5,
      title: 'Service',
      description: 'Congue mauris rhoncus aenean vel elit. Quam vulputate dignissim suspendisse in est ante. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Tristique magna sit amet purus gravida quis blandit turpis.',
      image: imageData.allFile.nodes[5].childImageSharp.fluid
    }, {
      id: 6,
      title: 'Service',
      description: 'Vitae semper quis lectus nulla at volutpat diam. Ac ut consequat semper viverra nam libero. Iaculis at erat pellentesque adipiscing commodo elit. Praesent elementum facilisis leo vel.',
      image: imageData.allFile.nodes[6].childImageSharp.fluid
    },
    {
      id: 7,
      title: 'Service',
      description: 'Eu non diam phasellus vestibulum lorem. Tristique nulla aliquet enim tortor at auctor urna. Quam quisque id diam vel quam elementum pulvinar etiam non.',
      image: imageData.allFile.nodes[7].childImageSharp.fluid
    }, {
      id: 8,
      title: 'Service',
      description: 'At lectus urna duis convallis convallis tellus id interdum velit. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nullam non nisi est sit amet facilisis.',
      image: imageData.allFile.nodes[8].childImageSharp.fluid
    }, {
      id: 9,
      title: 'Service',
      description: 'Porta non pulvinar neque laoreet suspendisse interdum consectetur. Malesuada fames ac turpis egestas. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.',
      image: imageData.allFile.nodes[9].childImageSharp.fluid
    }, {
      id: 10,
      title: 'Service',
      description: 'Et netus et malesuada fames. Nisl condimentum id venenatis a. At augue eget arcu dictum varius duis at. Tempor id eu nisl nunc. Tristique senectus et netus et malesuada fames ac.',
      image: imageData.allFile.nodes[10].childImageSharp.fluid
    }, {
      id: 11,
      title: 'Service',
      description: 'Risus nec feugiat in fermentum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Ut etiam sit amet nisl purus in mollis.',
      image: imageData.allFile.nodes[11].childImageSharp.fluid
    }, {
      id: 12,
      title: 'Service',
      description: 'Ut tortor pretium viverra suspendisse potenti nullam ac tortor. In iaculis nunc sed augue lacus viverra vitae congue. Sit amet aliquam id diam maecenas ultricies.',
      image: imageData.allFile.nodes[12].childImageSharp.fluid
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
            title={`${service.title} ${service.id}`}
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
                    Our Services
                  </h3>
              </Col>
              {serviceCards}
              <Col
                xs={12}
                className="d-flex justify-content-center">
                {window.innerWidth < 768
                  ? <a
                      href="tel:+16264431788"
                      className="btn btn-primary m-auto">
                      Give Us a Call Today
                    </a>
                  : <Link
                      className="btn btn-primary m-auto"
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
