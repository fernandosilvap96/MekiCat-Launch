import Image from "next/image";
import styles from "./Team.module.scss";

const Member = ({ member }) => {
  return (
    <figure className={styles.card}>
      <div className={styles._image}>
        <img src={member.photoUrl} alt={member.name} />
      </div>

      <figcaption className={styles.card_details}>
        <div>
          <h3>{member.name}</h3>
          <p>{member.position}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Member;
