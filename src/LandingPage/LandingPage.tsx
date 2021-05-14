import clsx from "clsx";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AppContainer>
        {/* <Section title="Application UI" subtitle={`Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.`}>
        </Section>
        <Section title="Layout" subtitle={`Application Layout for Multi-purpose web - Sidebar + Navbar / Topbar Only`}>
        </Section> */}
        <Section
          title="Pages"
          subtitle={`General pages for any web application. Signin, Register`}
        >
          <SectionItem title="Signin" thumbnail="/assets/images/examples/signin.jpeg" link="/show-case/signin" />
        </Section>
      </AppContainer>
    </>
  );
};

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className={clsx("app-container", styles.container)}>{children}</div>
  );
};

interface SectionProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const Section = ({ children, title, subtitle }: SectionProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
interface SectionItemProps {
  title: string;
  link: string;
  thumbnail: string;
}

const SectionItem = ({ title, thumbnail, link }: SectionItemProps) => {
  return (
    <Link className={styles.sectionItem} to={link}>
      <img className={styles.sectionItemImage} src={thumbnail} />
      <div className={styles.sectionItemTitle}>{title}</div>
    </Link>
  );
};

export default LandingPage;
