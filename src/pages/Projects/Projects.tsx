import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import ProjectItem from '../../components/Project/Project';
import { Project, ProjectsList } from '../../Data/Projects';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [projects, setProjects] = useState<Project[]>([] as Project[]);
  const [loading, setLoading] = useState<boolean>(true);
  const filters: string[] = ["", "Branding", "Web Design", "Digital Marketing"];

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    setLoading(true);
    let projectList: Project[] = [] as Project[];
    let data = await fetch("https://www.gov.uk/bank-holidays.json").then(d => { return d.json() });
    data["england-and-wales"].events.filter((e: any) => new Date(e.date).getFullYear() === new Date().getFullYear()).filter((e: any, i: number) => i < 5).map((e: any, i: number) => {
      projectList.push({
        Title: e.title,
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
        Size: i === 3 ? "TwoThirds" : "",
        Image: `/assets/images/Projects/project-${i + 1}.png`,
        Type: GetType(new Date(e.date).getMonth())
      } as Project)
    });
    setProjects(projectList);
    setLoading(false);
  }

  const GetType = (Month: number) => {
    switch (Month) {
      case 4:
        return "Branding";
      case 0:
        return "Web Design";
      default:
        return "Digital Marketing";
    }
  }

  return (<>
    <div className={styles.Projects} id="Work">
      <Loading Show={loading} />

      <div className={styles.ProjectsInfo}>
        <div className={styles.ProjectsInfoInner}>
          <h1>
            Some of our
            <span>recent projects</span>
          </h1>

          <div className={styles.ProjectsTabs}>
            <button type="button" className={active === 0 ? styles.Active : ""} onClick={() => setActive(0)}>
              All
            </button>
            <button type="button" className={active === 1 ? styles.Active : ""} onClick={() => setActive(1)}>
              Branding
            </button>
            <button type="button" className={active === 2 ? styles.Active : ""} onClick={() => setActive(2)}>
              Web Design
            </button>
            <button type="button" className={active === 3 ? styles.Active : ""} onClick={() => setActive(3)}>
              Digital Marketing
            </button>

            <div style={{ marginLeft: `${active * 25}%` }} className={styles.ProjectsTabsLine}></div>
          </div>

          <div className={styles.ProjectsList}>
            {
              projects.filter((f) => active ? f.Type === filters[active] : true).map((p) => {
                return <ProjectItem Project={p} />
              })
            }
          </div>

          <div className={styles.ProjectsControls}>
            <a href='#'>See all work</a>

            <div className={styles.ProjectsControlsButtons}>
              <button type="button" onClick={() => setActive(active ? (active - 1) : 3)}>
                <i>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </i>
              </button>

              <button type="button" onClick={() => setActive(active < 3 ? (active + 1) : 0)}>
                <i>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Projects;
