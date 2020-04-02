import React from 'react';
import {
  Col
} from 'reactstrap';
import Img from "gatsby-image";


const Gallery = props => {
  console.log(props);
  return props.galleryImages.map((image, index) => {
    return (
      <Col
        key={index}
        sm={3}>
          <Img
            fluid={image.childImageSharp.fluid} />
      </Col>
      )});
}

export default Gallery;
