import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./ShowCase.module.scss";

interface ShowCaseContainerProps {
  children: ReactNode;
}

export const ShowCaseContainer = ({ children }: ShowCaseContainerProps) => {
  return (
    <div className={clsx("app-container", styles.container)}>{children}</div>
  );
};

interface ShowCaseSectionProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const ShowCaseSection = ({
  subtitle,
  title,
  children,
}: ShowCaseSectionProps) => {
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      {children}
    </>
  );
};

interface ShowCaseFrameProps {
  children: ReactNode;
}

export const ShowCaseFrame = ({ children }: ShowCaseFrameProps) => {
  return (
    <div className={styles.frameContainer}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};
