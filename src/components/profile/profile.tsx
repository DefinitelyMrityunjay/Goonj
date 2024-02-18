import Image from "next/image"

import styles from "./profile.module.scss"
interface profileProp {
    key: number;
    src: string;
    alt: string;
    des: string;
    contact: string;
    email?: string; // Make email optional by adding a question mark (?)
  }
  
  
export default function Profile({src,alt,contact,des,email}:profileProp){
    return(
        <div className={styles.container}>
            <Image 
                className={styles.img}
                src={src}
                alt={alt}
                width={100}
                height={100}
            />
            <p className={styles.name}>{alt}</p>
            <p className={styles.des}>{des}</p>
            { contact!="" &&<a href={`https://api.whatsapp.com/send?phone=${contact}`} target="_blank" rel="noreferrer">
                <Image 
                src="/logos/logos_whatsapp-icon.png"
                alt="WhatsApp"
                width={30}
                height={30}
                />
                </a>}
            {email!="" && <a href={`mailto: ${email}`}>
                <Image 
                    src="/logos/logos_google-gmail.png"
                    alt="Mail"
                    width={39.8}
                    height={30}
                />
                </a>
            }
        </div>
    )
}