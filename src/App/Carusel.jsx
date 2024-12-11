import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: '/src/assets/img/1.jpg',
    key: 1,
  },
  {
    src: '/src/assets/img/2.jpg',
    key: 2,
  },
  {
    src: '/src/assets/img/3.jpg',
    key: 3,
  },
  {
    src: '/src/assets/img/4.jpg',
    key: 4,
  },
  {
    src: '/src/assets/img/5.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 5,
  },
  {
    src: '/src/assets/img/6.jpg',
    key: 6,
  },
  {
    src: '/src/assets/img/7.jpg',
    key: 7,
  },
];

function Carusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="relative"
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: '100%', height: '350px', objectFit: 'cover' }} // Estilos en línea
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      style={{ maxWidth: '100%', height: '350px' }} // Estilos en línea para el contenedor
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carusel;
