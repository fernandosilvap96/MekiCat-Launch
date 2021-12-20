import Faq from './Faq';
import { faqs } from '../../Data/faq';
import { Typography } from '@mui/material';
import styles from './Faqs.module.scss';

const Faqs = () => {
  return (
    <div className={styles.faqs}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      {faqs?.map((faq) => (
        <Faq key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default Faqs;
