import styles from "./Intro.module.scss";
import Button from "../../global/Button/Button";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <article className={styles._first_intro}>
        <div className={styles._intro_data}>
          <h2 className={styles._title}>
            Welcome to the
            <br />
            <span>Charming Chameleons</span>
          </h2>
          <p>
            The Charming Chameleons is a private collection of 2800 Ancient Cats
            NFTs— unique digital collectibles. The Ancient Cats are stored as
            ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </p>
          <p>
            With more than 180+ high quality 3D attributes, each NFT is unique
            and comes with an exclusive access to the Charming Chameleons, a
            group of successful investors that will take over the world and
            establish a new empire. Join an ambitious ever-growing community
            with multiple benefits and utilities.
          </p>
          <Button>Join the Club</Button>
        </div>
        <div className={styles._intro_img}>
          <img src="/intro.png" alt="intro img" />
        </div>
      </article>

      <article className={styles._second_intro}>
        <div className={styles._intro_img}>
          <img src="/intro.gif" alt="intro img" />
        </div>
        <div className={styles._intro_data}>
          <h2 className={styles._title}>
            <span>Chameleons</span> Lore&apos;s Summary
          </h2>
          <p>
            Thousands of years after Ancient Egypt has fallen, a mysterious
            cosmic event activated the pyramids: a powerful beam of energy
            emerged and opened an interstellar portal to a planet in the
            constellation of Orion.
          </p>
          <p>
            Aliens came out of the portal, it was the long awaited resurgence of
            the Charming Chameleons. The humanoid Sphynx Cats once revered as
            gods have returned to reign and establish a new Era Empire.
          </p>
          <p>
            The question becomes: will the modern-day world worship the Charming
            Chameleons once more?
          </p>

          <Button>Read the full lore on Discord</Button>
        </div>
      </article>
    </div>
  );
};

export default Intro;
