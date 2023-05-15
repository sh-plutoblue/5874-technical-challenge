import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Links } from '../../Data/Links';
import styles from './Services.module.scss';

const Services: React.FC = () => {
  return (<div className={styles.Services} id="Services">
    <div className={styles.ServicesInfo}>
      <div className={styles.ServicesInfoInner}>
        <h1>
          What are
          <span>we capable of</span>
        </h1>

        <p>
          By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
        </p>

        <a href='#'>Our process</a>
      </div>
    </div>

    <div className={styles.ServicesInfo}>
      {
        Links.map((s) => {
          return <ul>
            <li><b>{s.Title}</b></li>
            {
              s.Links.map((l) => {
                return <li>
                  <a href='#'>
                    <span>{l.Text}</span>
                    <i>
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </i>
                  </a>
                </li>
              })
            }
          </ul>
        })
      }
    </div>
  </div>);
};

export default Services;
