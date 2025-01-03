import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/niq.module.scss";
import Marque from "@/components/marque/marque";
import Footer from "@/components/footer/footer";
import footerstyles from "@/styles/footer.module.scss";

export default function Niq() {
  return (
    <>
      <Head>
        <title>Goonj 2025 | INFO</title>
        <meta name="Goonj" content="Goonj 2025, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Marque/> */}
        <header>
          <Navbar color={"#2C4938"} />
        </header>

        <div className={styles.top}></div>
        <div className={styles.content}>
          <Image
            className={styles.heroimg}
            src="/NIQ_hero.svg"
            alt="bggreen"
            width={320}
            height={159}
          />

          <h2 className={styles.heading}>
            Goonj 2025
            <br />
            Information brochure
          </h2>
          <div
            className="niqBtn"
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <a
              className={styles.form}
              href="https://drive.google.com/file/d/1koaS87nGKPI4ndByXAFfCGRM_g2BN3-e/view?usp=drivesdk"
              download
              target="_blank"
              rel="noreferrer"
              style={{
                width: "calc(33.33% - 5px)",
                textAlign: "center",
                backgroundColor: "#CD001As",
                color: "#fff",
                textDecoration: "none",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Marketing brochure
            </a>

            <a
              className={styles.form}
              href="https://firebasestorage.googleapis.com/v0/b/goonj-2k24.appspot.com/o/marketing%20brochures%2Fevent%20brochure%20original_compressed-1.pdf?alt=media&token=f57b1e95-1908-4513-b415-dc12eacbfdfe"
              download
              target="_blank"
              rel="noreferrer"
              style={{
                width: "calc(33.33% - 5px)",
                textAlign: "center",
                backgroundColor: "#CD001A",
                color: "#fff",
                textDecoration: "none",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Events brochure
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
