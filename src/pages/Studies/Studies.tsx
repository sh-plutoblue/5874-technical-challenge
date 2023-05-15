import { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Loading from '../../components/Loading/Loading';
import { CaseStudy } from '../../Data/CaseStudies';
import styles from './Studies.module.scss';

const Studies: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([] as CaseStudy[])

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    setLoading(true);
    let caseStudyList: CaseStudy[] = [] as CaseStudy[];
    let data = await fetch("https://www.gov.uk/bank-holidays.json").then(d => { return d.json() });
    data["england-and-wales"].events.filter((e: any) => new Date(e.date).getFullYear() === new Date().getFullYear()).filter((e: any, i: number) => i < 5).map((e: any, i: number) => {
      caseStudyList.push({
        Title: e.title,
        Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus erat, pulvinar at tortor at, condimentum aliquam enim. Ut eget dui mattis, varius lacus sed, feugiat tortor. Nulla a lacinia ante, vel tempus purus. Aenean eu elit a neque vehicula euismod. Cras ultricies faucibus leo, at euismod justo dapibus eu. Nullam a purus elit. Ut accumsan euismod placerat.",
        Image: `/assets/images/Case-Studies/study-${i + 1}.png`,
      } as CaseStudy)
    });
    setCaseStudies(caseStudyList);
    setLoading(false);
  }

  return (<div className={styles.Studies} id="Blog">
    <Loading Show={loading} />

    <h1>Case Studies</h1>
    <p>Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.</p>

    <Carousel CaseStudies={caseStudies} />
  </div>);
};

export default Studies;
