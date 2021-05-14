
import clsx from "clsx";
import React from "react";
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroHeading}>
          <div className={styles.title}>Production Ready UI Boilerplate</div>
          <div className={styles.subtitle}>Crafted with TailwindCSS</div>
        </div>
        {/* <div className={styles.preview}> */}
          {/* <div className={clsx(styles.item, styles.item3)}>
            <img src="/assets/images/examples/signin.jpeg" />
          </div> */}
          {/* <div className={clsx(styles.item, styles.item2)}>
           <img src="/assets/images/preview1.png"/>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}