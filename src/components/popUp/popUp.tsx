import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./popUp.module.scss";
export default function Popup({ setpopup }: popupProp) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div>
      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.bg}>
            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0iT50y?si=12f6ac7fe8384a76">
              <Image
                className={styles.img}
                src="/artist/Kulwinder Billa.png"
                alt="startnight"
                width={1414}
                height={2000}
              />
            </a>
            <div
              className={styles.cross}
              onClick={() => {
                setpopup(false);
              }}
            >
              <p>X</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
