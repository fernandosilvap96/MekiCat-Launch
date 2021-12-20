import styles from './HeroArea.module.scss';

const HeroArea = () => {
  return (
    <div className={styles.heroArea_wrapper}>
      <span className={styles.svg__path}>
        <svg viewBox="0 0 500 250" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
          ></path>
        </svg>
      </span>
    </div>
  );
};

export default HeroArea;
