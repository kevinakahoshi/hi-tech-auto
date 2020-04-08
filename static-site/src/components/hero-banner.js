import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import DownArrow from './down-arrow';

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
          {props.index ? <DownArrow /> : null}
      </BackgroundImage>
  )
}

export default HeroBanner;
