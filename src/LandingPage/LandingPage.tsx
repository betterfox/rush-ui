import clsx from "clsx";
import React from "react";
import HeroSection from "./HeroSection";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroSection />

      <div className={clsx("app-container", styles.container)}>
        <div className={styles.section}>
          <div className={styles.heading}>
            <div className={styles.title}>Application UI</div>
            <div className={styles.subTitle}>
              Form layouts, tables, modal windows — everything you need to build
              beautiful responsive web applications.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
