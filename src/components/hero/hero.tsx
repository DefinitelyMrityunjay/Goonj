import Image from "next/image";
import styles from "./hero.module.scss";

export default function Hero() {
  const tagSize = 200;
  return (
    <div className={styles.container}>
      {/* <Image 
            id="tagLine"
            className={styles.tagLine}
            
            alt="TagLine"
            width={tagSize*2.25}
            height={tagSize}
            /> */}
      {/* <Dancers /> */}
      <p className={styles.tagLine}>UIET’S TECHNO-CULTURAL FEST</p>
      <p className={styles.date}>&#128197; 13-14-15 MARCH</p>
      <Image
        src="/bgIMG3.png"
        alt="theme"
        layout="fill"
        objectFit="cover"
        className={styles.heroIMG}
      />
    </div>
  );
}
