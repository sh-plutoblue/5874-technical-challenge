import { faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Testimonial } from '../../../Data/Testimonials';
import styles from './Item.module.scss';

type Props = {
  Item: Testimonial;
  Active: number;
  Index: number;
  Length: number;
}

const TestimonialCarouselItem: React.FC<Props> = ({ Item, Active, Index, Length }) => {
  const GetClass = () => {
    let className: string = `${styles.Item}`;

    if (Active === Index)
      className += ` ${styles.Active}`;

    return className;
  }

  return (<>
    <div className={`${GetClass()}`}>
      <div className={styles.ItemInfo}>
        <p>
          <span>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </span>
          <i>{Item.Testimonial}</i>
          <span>
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </p>
      </div>
      <div className={styles.ItemCustomer}>
        <img src={Item.Image} />
        <b>{Item.Name}</b>
        <span>{Item.JobTitle}, {Item.Company}</span>
      </div>
    </div>
  </>);
};

export default TestimonialCarouselItem;
