import styles from './TestimonialCarousel.module.scss';
import { useState } from 'react';
import TestimonialCarouselItem from './Item/Item';
import { Testimonial } from '../../Data/Testimonials';

type Props = {
  Testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<Props> = ({ Testimonials }) => {
  const [active, setActive] = useState<number>(1);

  return (<>
    <div className={styles.Carousel}>
      {
        Testimonials.map((t, i) => {
          return <TestimonialCarouselItem Length={Testimonials.length} Item={t} Index={i} Active={active} />
        })
      }

      <div className={styles.CarouselControls}>
        {
          Testimonials.map((t, i) => {
            return <button type="button" className={active === i ? styles.Active : ""} onClick={() => setActive(i)}></button>
          })
        }
      </div>
    </div>
  </>);
};

export default TestimonialCarousel;
