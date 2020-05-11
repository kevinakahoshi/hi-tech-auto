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

  useEffect(() => {
    global.addEventListener('resize', () => {
      if (galleryRef.current) {
        setImageHeight(galleryRef.current.imageRef.current.width);
      }
    });

    return () => {
      global.removeEventListener('resize', () => {});
    }
  });

  return props.galleryImages.map((image, index) => {
    return (
      <Col
        key={index}
        lg={3}
        sm={6}
        className="d-none d-sm-block">
          <div
            role="button"
            aria-label={`View ${image.name} photo.`}
            tabIndex="0"
            onKeyPress={() => props.toggle(image.childImageSharp.fluid)}
            onClick={() => props.toggle(image.childImageSharp.fluid)}
            style={{ height: imageHeight }}
            className="image-gallery-container pointer">
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
