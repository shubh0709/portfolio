"use client";
import styles from "./page.module.css";
import menuIcon from "../../../../public/svgs/menuIcon.svg";
import close from "../../../../public/svgs/close.svg";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`${styles.header} ${showNav && styles.active}`}>
      <div className={styles.navIconCont} onClick={toggle}>
        <Image src={menuIcon} alt={"menu"} className={styles.menuIcon} />
        <Image src={close} alt={"close"} className={styles.closeIcon} />
      </div>
      <div className={`${styles.navbar}`}>
        <div
          className={`${styles.navOptions} ${showNav && styles.showNavOptions}`}
        >
          <a className={styles.navtext} href={"/"}>
            {"Home"}
          </a>
          <a className={styles.navtext} href={"/about"}>
            {"About"}
          </a>
          <a className={styles.navtext} href={"/contacts"}>
            {"Contacts"}
          </a>
        </div>
      </div>
    </div>
  );
}
