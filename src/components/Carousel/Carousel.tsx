import { CaseStudy } from '../../Data/CaseStudies';
import CarouselItem from './Item/Item';
import styles from './Carousel.module.scss';
import { useState } from 'react';

type Props = {
  CaseStudies: CaseStudy[];
}

const Carousel: React.FC<Props> = ({ CaseStudies }) => {
  const [active, setActive] = useState<number>(0);

  return (<>
    <div className={styles.Carousel}>
      {
        CaseStudies.map((s, i) => {
          return <CarouselItem Length={CaseStudies.length} Item={s} Index={i} Active={active} OnPrev={() => setActive(active === 0 ? (CaseStudies.length - 1) : (active - 1))} OnNext={() => setActive(active === (CaseStudies.length - 1) ? 0 : active + 1)} />
        })
      }
    </div>
  </>);
};

export default Carousel;
