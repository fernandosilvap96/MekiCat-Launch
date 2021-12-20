import * as React from 'react';
import styles from './Faqs.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = ({ faq }) => {
  return (
    <div className={styles.single_faq}>
      <Accordion className={styles.faq_box}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={styles.faq_title}>{faq.title}</h3>
        </AccordionSummary>
        <AccordionDetails>
          {faq?.ans.map((ans, i) => (
            <p className={styles.faq_ans} key={i}>
              {ans}
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
