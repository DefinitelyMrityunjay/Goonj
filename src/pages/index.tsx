import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import styles from "@/styles/Home.module.scss";
import Popup from "@/components/popUp/popUp";
import PrevGoonj from "@/components/prevGoonj/prevGoonj";
import { useRef, useState } from "react";
import Marque from "@/components/marque/marque";
export default function Home() {
  const ref=useRef<HTMLDivElement>(null)
  const [popup,setPopup]=useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Goonj 2025</title>
        <meta name="Goonj" content="Goonj 2025, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} ref={ref}>
        {/* <Marque/> */}
        {/* {popup && <Popup setpopup={setPopup} />} */}
       <header>
          <Navbar color={"#a02a91"}/>
       </header>
       <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <div
      id="stage"
      className={styles.bgImg}
      style={{
        // position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: -1
      }}
    />
  </div>
       <Hero/>
      </main>
       <PrevGoonj refer={ref}/>
    </>
  );
}
