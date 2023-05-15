import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (<div className={styles.Home}>
    <div className={styles.HomeInfo}>
      <div className={styles.HomeInfoInner}>
        <b>Brand, dev, ecom, marketing</b>

        <h1>
          We unleash
          <span>business potential</span>
        </h1>

        <p>
          We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.
        </p>

        <a href="#">Let's talk</a>
      </div>
    </div>

    <div className={styles.HomeImage}>
      <img src={`/assets/images/dog.png`} />
    </div>
  </div>);
};

export default Home;
