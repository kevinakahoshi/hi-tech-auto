import React, {
  useState
} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

const ImageCarousel = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) {
      return;
    }
    const nextIndex =
      currentIndex === props.carouselImages.length - 1
        ? 0
        : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const previous = () => {
    if (animating) {
      return;
    }
    const nextIndex =
      currentIndex === 0
        ? props.carouselImages.length - 1
        : currentIndex - 1;
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
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={currentIndex}
      next={next}
      previous={previous}
      className="image-carousel w-100">
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
