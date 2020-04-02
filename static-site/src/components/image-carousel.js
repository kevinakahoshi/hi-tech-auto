import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  // CarouselIndicators,
} from 'reactstrap';
import Img from "gatsby-image";


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

  // const directImage = newIndex => {
  //   if (animating) {
  //     return;
  //   }

  //   setCurrentIndex(newIndex);
  // }

  const allSlides = props.carouselImages.map((image, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}>
          <Img
            fluid={image.childImageSharp.fluid} />
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={currentIndex}
      next={next}
      previous={previous}>
        {/* <CarouselIndicators

          items={props.carouselImages}
          activeIndex={currentIndex}
          onClickHandler={directImage} /> */}
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
