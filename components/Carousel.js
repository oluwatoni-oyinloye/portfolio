import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/Carousel_3.png',
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/Carousel_1.png',
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/Carousel_2.png',
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >

        <img className="slideImg" src={item.src} alt={item.altText} />
        <CarouselCaption className="CaptionText"  />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 850px;
            }
          .slideImg {
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
          }

          .CaptionText {
            color: #242323;
          }

          .carousel-control-next {
            opacity: 1;
            width: 10%;
          }

          .carousel-control-next-icon {
            width: 35px;
            height: 35px;
          }

          .carousel-control-prev {
            opacity: 1;
            width: 10%;
          }

          .carousel-control-prev-icon {
            width: 35px;
            height: 35px;
          }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default HomeCarousel;