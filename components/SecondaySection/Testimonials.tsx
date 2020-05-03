import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';

import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 0,
    name: 'Florin Pop',
    position: 'Galaxy Overlord',
    text:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quibusdam, repudiandae laboriosam cumque voluptates ex.',
    img: 'https://avatars.dicebear.com/v2/bottts/florin.svg',
  },
  {
    id: 0,
    name: 'Sonam Perjore',
    position: 'Queen Bee',
    text:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quibusdam, repudiandae laboriosam cumque voluptates ex.',
    img: 'https://avatars.dicebear.com/v2/female/sonam.svg',
  },
  {
    id: 0,
    name: 'Bill Gates',
    position: 'Galaxy Overlord',
    text:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quibusdam, repudiandae laboriosam cumque voluptates ex.',
    img: 'https://avatars.dicebear.com/v2/male/bill.svg',
  },
];

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    text: string;
    img: string;
    position: string;
  };
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
  const { id, name, text, img, position } = testimonial;
  return (
    <Slide className={styles.Slide} index={id}>
      <div className={styles.SlideContent}>
        <p className={styles.Text}>{text}</p>
        <img src={img} alt={name} className={styles.SlideIcon} />
        <h3 className={styles.Name}>{name}</h3>
        <p className={styles.Position}>{position}</p>
      </div>
    </Slide>
  );
};

const Testimonials = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={3}
      isPlaying
    >
      <Slider>
        {testimonials.map((t) => (
          <Testimonial testimonial={t} />
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default Testimonials;
