import React, {
  useRef,
  useState,
  useEffect
} from 'react';
import {
  Col
} from 'reactstrap';
import Img from "gatsby-image";

const Gallery = props => {
  const galleryRef = useRef();
  const [imageHeight, setImageHeight] = useState('25vw');

  window.addEventListener('resize', () => {
    if (galleryRef.current) {
      setImageHeight(galleryRef.current.imageRef.current.width);
    }
  });

  useEffect(() => {
    if (!galleryRef.current) {
      return setImageHeight('25vw');
    } else {
      if (window.innerWidth > 768) {
        return setImageHeight(galleryRef.current.imageRef.current.width);
      }
    }
  }, []);

  return props.galleryImages.map((image, index) => {
    return (
      <Col
        key={index}
        lg={3}
        sm={6}
        className="d-none d-sm-block">
          <div
            role="button"
            tabIndex="0"
            onKeyPress={() => props.toggle(image.childImageSharp.fluid)}
            onClick={() => props.toggle(image.childImageSharp.fluid)}
            className="image-gallery-container">
            <Img
              loading="lazy"
              ref={galleryRef}
              style={{ height: imageHeight }}
              fluid={image.childImageSharp.fluid}
              className="gallery-image pointer" />
          </div>
      </Col>
    )});
}

export default Gallery;
