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
  const [imageHeight, setImageHeight] = useState(null);

  window.addEventListener('resize', () => {
    if (galleryRef.current) {
      setImageHeight(galleryRef.current.imageRef.current.width);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      return setImageHeight(galleryRef.current.imageRef.current.width);
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
            style={{ height: imageHeight }}
            className="image-gallery-container">
            <Img
              loading={"lazy"}
              durationFadeIn={100}
              ref={galleryRef}
              style={{ height: imageHeight}}
              onLoad={() => {
                setImageHeight(galleryRef.current.imageRef.current.width)
              }}
              fluid={image.childImageSharp.fluid}
              className="image-gallery-container gallery-image pointer" />
          </div>
      </Col>
    )});
}

export default Gallery;
