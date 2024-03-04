import Image from "next/image";
import styles from "./hero.module.scss";
import Link from "next/link";

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
      <a href="/events"><p className={styles.date}><span>&#9654;&#x25B6;</span> Register Here For Events !</p></a>
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
