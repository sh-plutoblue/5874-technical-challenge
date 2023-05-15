import { Project } from '../../Data/Projects';
import styles from './Project.module.scss';

type Props = {
  Project: Project;
}

const ProjectItem: React.FC<Props> = ({ Project }) => {
  return (<>
    <div className={`${styles.Project} ${Project.Size ? styles[Project.Size] : ""}`}>
      <div className={styles.ProjectInner} style={{ backgroundImage: `url(${Project.Image})` }}>
        <div className={styles.ProjectInnerContent}>
          <h3>{Project.Title}</h3>
          <p>{Project.Description}</p>
          <a href='#'>Full Project</a>
        </div>
      </div>
    </div>
  </>);
};

export default ProjectItem;
