import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const HeroBanner = props => {
  return (
    <BackgroundImage
        id="hero-banner"
        fadeIn={true}
        Tag="div"
        className={`d-flex position-relative ${props.index ? 'hero-banner' : 'hero-banner-child'}`}
        fluid={props.heroImage} >
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
            className={props.index ? 'position-absolute d-flex w-100 down-scroll-container' : 'd-none'}>
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
  )
}

export default HeroBanner;
