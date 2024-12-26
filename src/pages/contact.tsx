import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import { Faculty, OC } from "../data/contact";
import styles from "../styles/contact.module.scss";
import { useState } from "react";
import Profile from "@/components/profile/profile";
import footerstyles from "@/styles/footer.module.scss";

export default function Contact() {
  const [type, setType] = useState<string>("OC");

  return (
    <>
      <Head>
        <title>Goonj 2025 | Contacts</title>
        <meta name="Goonj" content="Goonj 2025, UIET, PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bg}></div>
      <div className={styles.main}>
        <header>
          <Navbar />
        </header>
        <div className={styles.bgposter}>
          {/* <Image
            src="/contact.png"
            alt="contact"
            width={1500}
            height={1000}
            className="bgIMG"
          /> */}
        </div>
        <div className={styles.imgDIV}>
          <div>
            <div id="CONTACT_IMG">
              <Image
                className={styles.img}
                src="/contactus.png"
                alt="theme"
                width={604}
                height={135}
              />
            </div>
            <ul className={styles.FacultyStudentClicks}>
              <li
                className={type === "Faculty" ? styles.active : ""}
                onClick={() => setType("Faculty")}
              >
                Core Faculty Team
              </li>
              <li
                className={type === "OC" ? styles.active : ""}
                onClick={() => setType("OC")}
              >
                Core Students Team
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.top}></div>
        <nav className={styles.contactNav}></nav>
        {type == "Faculty" && (
          <div className={styles.faculty}>
            {Faculty.map((fac, idx) => {
              return <Profile {...fac} key={idx} />;
            })}
          </div>
        )}
        {type == "OC" && (
          <div className={styles.OC}>
            {OC.map((oc, idx) => {
              return <Profile {...oc} key={idx} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
