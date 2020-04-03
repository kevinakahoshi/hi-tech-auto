import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
// import Img from "gatsby-image";


const ImageCarousel = props => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) {
      return;
    }
    const nextIndex = currentIndex === props.carouselImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const previous = () => {
    if (animating) {
      return;
    }
    const nextIndex = currentIndex === props.carouselImages.length - 1 ? 0 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  }

  const directImage = newIndex => {
    if (animating) {
      return;
    }
    setCurrentIndex(newIndex);
  }

  const allSlides = props.carouselImages.map(image => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.childImageSharp.id}>
          <img
            alt=""
            src={image.childImageSharp.fluid.src}
            className="image-slide w-100" />
          {/* <Img
            fluid={image.childImageSharp.fluid} /> */}
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={currentIndex}
      next={next}
      previous={previous}
      className="image-carousel">
        <CarouselIndicators
          items={allSlides}
          activeIndex={currentIndex}
          onClickHandler={directImage} />
        {allSlides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous} />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next} />
    </Carousel>
  )
}

export default ImageCarousel;
