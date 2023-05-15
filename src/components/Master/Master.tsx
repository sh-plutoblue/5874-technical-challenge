import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './Master.module.scss';

const Master: React.FC = (props) => {
  const [offset, setOffset] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);
  const [colour, setColour] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setHide(false);

      if (window.pageYOffset === 0) {
        setColour(false);
      } else
        setColour(true);

      if (window.pageYOffset > offset)
        setHide(true);

      setOffset(window.pageYOffset);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return (<>
    <header className={`${styles.Header} ${sidebar ? styles.Open : ""} ${hide ? styles.Hide : ""} ${colour ? styles.Colour : ""}`}>
      <button type="button" onClick={() => setSidebar(!sidebar)}>
        <FontAwesomeIcon icon={sidebar ? faXmark : faBars} />
      </button>

      <div className={`${styles.HeaderInner}`}>
        <div className={styles.Logo}>
          <div className={styles.LogoInner}>
            <img src={`/assets/images/logo.png`} />
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <a href='#Services' onClick={() => setSidebar(false)}>Services</a>
            </li>
            <li>
              <a href='#Work' onClick={() => setSidebar(false)}>Work</a>
            </li>
            <li>
              <a href='#About' onClick={() => setSidebar(false)}>About</a>
            </li>
            <li>
              <a href='#Blog' onClick={() => setSidebar(false)}>Blog</a>
            </li>
            <li>
              <a href='#Contact' onClick={() => setSidebar(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    {props.children}
  </>);
};

export default Master;
