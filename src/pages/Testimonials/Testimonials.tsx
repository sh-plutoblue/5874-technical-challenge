import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel';
import { TestimonialsList } from '../../Data/Testimonials';
import styles from './Testimonials.module.scss';

const Testimonials: React.FC = () => {
  return (<div className={styles.Testimonials} id="Contact">
    <h1>
      Kind words
      <span>from our clients</span>
    </h1>

    <div className={styles.TestimonialsContent}>
      <div className={styles.TestimonialsContentInner}>
        <TestimonialCarousel Testimonials={TestimonialsList} />
      </div>
    </div>
  </div>);
};

export default Testimonials;
