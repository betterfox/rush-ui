import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./ShowCase.module.scss";

interface ShowCaseContainerProps {
  children: ReactNode;
}

export const ShowCaseContainer = ({ children }: ShowCaseContainerProps) => {
  return <div className={clsx("app-container", styles.container)}>{children}</div>;
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
    <div className={styles.heading}>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subTitle}>{subtitle}</div> }
      {children}
    </div>
  );
};
