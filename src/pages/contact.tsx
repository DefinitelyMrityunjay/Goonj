import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import {Faculty,OC} from "../data/contact"
import styles from "../styles/contact.module.scss"
import { useState } from "react";
import Profile from "@/components/profile/profile";


export default function Contact(){
    const [type,setType]=useState<string>("OC")
    return (
        <>
          <Head>
            <title>Goonj 2024 | Contacts</title>
            <meta name="Goonj" content="Goonj 2024, UIET,PU CHD" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
           <header>
              <Navbar/>
           </header>
           <div className={styles.imgDIV}>
            <div>
            <ul className={styles.FacultyStudentClicks}>
              <li onClick={()=>setType("Faculty")}>Core Faculty Team</li>
              <li >              <Image 
            className={styles.img}
            src="/contactus.png"
            alt="theme"
            width={604}
            height={135}
            /></li>
              <li onClick={()=>setType("OC")}>Core Students Team</li>
            </ul>
              <div></div>

            <div></div>
            </div>
</div>            {/* <Image 
            className={styles.img}
            src="/theme2.jpg"
            alt="theme"
            width={1892}
            height={628}
            /> */}
           <div className={styles.top}>
           </div>

           <nav className={styles.contactNav}>
            
           </nav>
              {
                type=="Faculty" && <div className={styles.faculty}>
                  {Faculty.map((fac,idx)=>{
                    return <Profile {...fac}  key={idx}/>
                  })}
                </div>
              }
              {
                type=="OC" && <div className={styles.OC}>
                  {OC.map((oc,idx)=>{
                    return <Profile {...oc}  key={idx}/>
                  })}
                </div>
              } 
        
          </main>
        </>
      );
}