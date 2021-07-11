import React from "react";
import Image from "next/image";
import DarkDesktop from "../public/images/bg-desktop-dark.jpg";
import LightDesktop from "../public/images/bg-desktop-light.jpg";
import DarkMobile from "../public/images/bg-mobile-dark.jpg";
import LightMobile from "../public/images/bg-mobile-light.jpg";
import styles from "../styles/Background.module.scss";

function Background({ currentTheme }) {
  return (
    <div>
      {currentTheme == 0 ? (
        <div className={`${styles.backgroundcontainer} ${styles.dark}`}>
          <div className={styles.desktop}>
            <Image src={DarkDesktop} height={300} layout="fixed" />
          </div>
          <div className={styles.mobile}>
            <Image src={DarkMobile} height={300} layout="fixed" />
          </div>
        </div>
      ) : (
        <div className={`${styles.backgroundcontainer} ${styles.light}`}>
          <div className={styles.desktop}>
            <Image src={LightDesktop} height={300} layout="fixed" />
          </div>
          <div className={styles.mobile}>
            <Image src={LightMobile} height={300} layout="fixed" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Background;
