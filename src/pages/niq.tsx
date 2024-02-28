import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/niq.module.scss"
import Marque from "@/components/marque/marque";
import Footer from "@/components/footer/footer";
import footerstyles from "@/styles/footer.module.scss"
export default function Niq(){
    return (
        <>
          <Head>
            <title>Goonj 2024 | NIQ</title>
            <meta name="Goonj" content="Goonj 2024, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            {/* <Marque/> */}
           <header>
              <Navbar  color={"#2C4938"} />
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


           <h2 className={styles.heading}>Goonj 2024
            <br />
           NIQ for Infrastructure</h2>
           <a className={styles.form} href="https://bit.ly/3HKl60g" download target="_blank" rel="noreferrer">Download Quotation Form</a>
           </div>
           <div className={footerstyles.footer}>
        <p>© Goonj&apos;24 Digital Operations</p>
        <p style={{color:"white"}}>
        Designed by Akashdeep 
        <br/> 
        Developed by{" "}
      
        <a href="/">
          Hitesh Bandhu,&nbsp;
        </a>
        <a href="/">
            Kanika Tiwari,&nbsp;
        </a>
        <a href="/">
        Mayur Sehgal,&nbsp;
        </a>
        <a href="/">
          Bhargavi Goyal
        </a>
        </p>
        <p>Powered and Secured By <a style={{color:"white"}} rel="follow" target="_blank" href="https://quinji.com">Quinji Tech</a></p>
    </div>
          </main>

        </>
      );
}