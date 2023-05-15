import styles from './About.module.scss';

const About: React.FC = () => {
  return (<div className={styles.About}>
    <h1>
      What are
      <span>we all about?</span>
    </h1>

    <div className={styles.AboutInfo}>
      <div className={styles.AboutInfoInner}>
        <div className={styles.AboutInfoGallery}>
          <img src={'/assets/images/Gallery/gallery-1.png'} />

          <div className={styles.AboutInfoGalleryLinks}>
            <a href='#'>About</a>
            <a href='#'>Careers</a>
          </div>
        </div>

        <div className={styles.AboutInfoGallery}>
          <img src={'/assets/images/Gallery/gallery-2.png'} />
          <img src={'/assets/images/Gallery/gallery-3.png'} />
        </div>

        <div className={styles.AboutInfoGallery}>
          <img src={'/assets/images/Gallery/gallery-4.png'} />
        </div>
      </div>
    </div>
  </div>);
};

export default About;
