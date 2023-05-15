import styles from './Loading.module.scss';

type Props = {
  Show: boolean;
}

const Loading: React.FC<Props> = ({ Show }) => {
  return (<div className={`${styles.Loading} ${Show ? styles.Show : ""}`}>
    <div className={styles.LoadingInner}>

    </div>
  </div>);
};

export default Loading;
