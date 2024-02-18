import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/artist.module.scss";
export default function Artist() {
  return (
    <>
      <Head>
        <title>Goonj 2024 | Artist</title>
        <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header>
          <Navbar color={"#AD0000"} />
        </header>
        <div className={styles.artist}>
          <h2>Kulwinder Billa</h2>
          <div className={styles.media}>
            <video
              src="/artist/reel.mp4"
              className={styles.vid}
              controls
              autoPlay
            />
            <Image
              className={styles.img}
              src="/artist/kulwinder.png"
              alt="Kulwinder Billa"
              width={1080}
              height={1080}
            />
          </div>
          <p>Our Previous Star</p>
          <h3>Gurnaam Bullar</h3>
          <div>
            <img
              className={styles.img}
              id="preArtist"
              src="/artist/gurnaam.png"
              alt="Gurnaam Bullar"
              width={700}
              height={408}
            />
          </div>
        </div>
      </main>
    </>
  );
}
