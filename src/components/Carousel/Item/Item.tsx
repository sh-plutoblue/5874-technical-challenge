import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CaseStudy } from '../../../Data/CaseStudies';
import styles from './Item.module.scss';

type Props = {
  Item: CaseStudy;
  Active: number;
  Index: number;
  Length: number;
  OnNext: () => void;
  OnPrev: () => void;
}

const CarouselItem: React.FC<Props> = ({ Item, Active, Index, OnNext, OnPrev, Length }) => {
  const GetClass = () => {
    if (Active === Index)
      return styles.Active;
    if ((Active === (Index - 1)) || ((Active === (Length - 1)) && Index === 0))
      return styles.After;
    if ((Active === (Index + 1)) || ((Active === 0) && Index === (Length - 1)))
      return styles.Before;
  }

  return (<>
    <div className={`${styles.Item} ${GetClass()}`}>
      <div className={styles.ItemInner}>
        <div className={styles.ItemImage}>
          <img src={Item.Image} />
        </div>

        <div className={styles.ItemInfo}>
          <div className={styles.ItemInfoContent}>
            <h2>{Item.Title}</h2>
            <p>{Item.Description}</p>
            <a href='#'>Read more</a>
          </div>
          <div className={styles.ItemInfoButtons}>
            <button type="button" onClick={() => OnPrev()}>
              <i>
                <FontAwesomeIcon icon={faChevronLeft} />
              </i>
            </button>

            <button type="button" onClick={() => OnNext()}>
              <i>
                <FontAwesomeIcon icon={faChevronRight} />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default CarouselItem;
