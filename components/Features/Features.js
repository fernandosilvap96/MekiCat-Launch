import { features } from '../../Data/features';
import Feature from './Feature';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <div className={styles.features}>
      <h2 className={styles._title}>Features</h2>

      <div className={styles._features_list}>
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
