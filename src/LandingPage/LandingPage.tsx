import clsx from "clsx";
import React, { ReactNode } from "react";
import HeroSection from "./HeroSection";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AppContainer>
        <Section title="Application UI" subtitle={`Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.`}>
        </Section>
        <Section title="Layout" subtitle={`Application Layout for Multi-purpose web - Sidebar + Navbar / Topbar Only`}>
        </Section>
      </AppContainer>
    </>
  );
};

interface AppContainerProps {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className={clsx("app-container", styles.container)}>
      {children}
    </div>
  )
}

interface SectionProps {
  children: ReactNode,
  title: string,
  subtitle: string
}

const Section = ({ children, title, subtitle }: SectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>
          {subtitle}
        </div>
      </div>
      {children}
    </div>
  )
}

export default LandingPage;
