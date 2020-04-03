import React, {
  createRef,
  useState,
  use
} from 'react';
import {
  Col
} from 'reactstrap';
import Img from "gatsby-image";


const Gallery = props => {
  const galleryRef = createRef(null);
  const [imageHeight, setImageHeight] = useState(null)

  React.useEffect(() => {
    if (galleryRef.current.imageRef.current.width !== imageHeight) {
      setImageHeight(galleryRef.current.imageRef.current.width);
    }
    console.log(galleryRef.current.imageRef.current.width)
  }, [galleryRef]);

  return props.galleryImages.map((image, index) => {
    return (
      <Col
        key={index}
        md={3}
        sm={6}>
          <Img
            ref={galleryRef}
            style={{ minHeight: imageHeight }}
            fluid={image.childImageSharp.fluid}
            className="gallery-image" />
      </Col>
      )});
}

export default Gallery;
