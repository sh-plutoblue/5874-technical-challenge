import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterLinks, Links } from '../../Data/Links';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (<div className={styles.Footer}>
    <div className={styles.FooterInner}>
      <div className={styles.FooterInfo}>
        <div className={styles.FooterInfoInner}>
          <h1>
            We're a brands
            <span>best friend</span>
          </h1>

          <a href='#'>Let's talk</a>
        </div>
      </div>

      <div className={styles.FooterInfo}>
        {
          FooterLinks.map((s) => {
            return <ul>
              <li><b>{s.Title}</b></li>
              {
                s.Links.map((l) => {
                  return <li>
                    <a href='#'>
                      <span>{l.Text}</span>
                      {l.SubText ? <small>{l.SubText}</small> : <></>}
                    </a>
                  </li>
                })
              }
            </ul>
          })
        }
      </div>
    </div>

    <div className={styles.FooterLower}>
      <div className={styles.FooterLowerInner}>
        <p>
          Copyright © Digital Spaniel 2019. All rights reserved.
        </p>

        <a>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a>
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a>
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  </div>);
};

export default Footer;
