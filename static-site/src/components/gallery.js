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
  const [imageHeight, setImageHeight] = useState(null)

  useEffect(() => {
    if (!galleryRef.current) {
      galleryRef.current = true;
    } else {
      if (galleryRef.current.imageRef.current.width !== imageHeight) {
        setImageHeight(galleryRef.current.imageRef.current.width);
      }
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
            loading="lazy"
            style={{ minHeight: imageHeight }}
            fluid={image.childImageSharp.fluid}
            className="gallery-image" />
      </Col>
      )});
}

export default Gallery;
