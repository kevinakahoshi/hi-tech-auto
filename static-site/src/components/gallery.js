import React, {
  createRef,
  useState,
  useEffect
} from 'react';
import {
  Col
} from 'reactstrap';
import Img from "gatsby-image";

const Gallery = props => {
  const galleryRef = createRef(null);
  const [imageHeight, setImageHeight] = useState(null);

  window.addEventListener('resize', () => {
    if (galleryRef.current) {
      setImageHeight(galleryRef.current.imageRef.current.width);
    }
  });

  useEffect(() => {
    if (!galleryRef.current) {
      galleryRef.current = true;
    } else {
      setImageHeight(galleryRef.current.imageRef.current.width);
    }
  }, [galleryRef]);

  return props.galleryImages.map((image, index) => {
    return (
      <Col
        key={index}
        lg={3}
        sm={6}
        className="d-none d-sm-block">
          <Img
            ref={galleryRef}
            loading="lazy"
            style={{ minHeight: imageHeight }}
            fluid={image.childImageSharp.fluid}
            className="gallery-image" />
      </Col>
      )});
}

export default Gallery;
