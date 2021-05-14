import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import { ButtonGroup, Button } from '@material-ui/core';
import styles from "./ShowCase.module.scss";
import { FiTablet, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { FaReact, FaVuejs, FaAngular } from 'react-icons/fa'
import { CodeBlock, atomOneDark } from "react-code-blocks";

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
  reactCssModuleCode?: string;
  reactCssModuleStyle?: string;
}

enum DisplayMode {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

enum CodeGroup {
  ReactCssModule = 'react-css-modules',
  ReactStyledComponent = 'react-styled-component',
  Vue = 'vue',
  Angular = 'angular'
}

export const ShowCaseFrame = ({ children, reactCssModuleCode, reactCssModuleStyle }: ShowCaseFrameProps) => {
  const [displayMode, setDisplayMode] = useState(DisplayMode.Desktop as DisplayMode)
  const [codeGroup, setCodeGroup] = useState(null as CodeGroup | null)

  const toggleCodeGroup = (target: CodeGroup) => {
    if (codeGroup === target) {
      setCodeGroup(null)
      return false;
    }
    setCodeGroup(target)
  }
  return (
    <div className={styles.frameContainer}>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <ButtonGroup className={styles.displayModeButtonContainer}>
            <Button onClick={() => {
              setDisplayMode(DisplayMode.Mobile)
            }} className={clsx(styles.button, { [styles.isActive]: displayMode === DisplayMode.Mobile })}>
              <FiSmartphone className={styles.icon} />
              <div className={styles.title}>Mobile</div>
            </Button>
            <Button onClick={() => {
              setDisplayMode(DisplayMode.Tablet)
            }} className={clsx(styles.button, { [styles.isActive]: displayMode === DisplayMode.Tablet })}>
              <FiTablet className={styles.icon} />
              <div className={styles.title}>Tablet</div>
            </Button>
            <Button onClick={() => {
              setDisplayMode(DisplayMode.Desktop)
            }} className={clsx(styles.button, { [styles.isActive]: displayMode === DisplayMode.Desktop })}>
              <FiMonitor className={styles.icon} />
              <div className={styles.title}>Desktop</div>
            </Button>
          </ButtonGroup>
        </div>
        <div className={styles.rightSection}>
          <ButtonGroup className={styles.codeButtonContainer}>
            <Button onClick={() => {
              toggleCodeGroup(CodeGroup.ReactCssModule)
            }} className={clsx(styles.button, { [styles.isActive]: codeGroup === CodeGroup.ReactCssModule })}>
              <FaReact className={styles.icon} />
              <div className={styles.title}> + CSS Modules</div>
            </Button>
            <Button onClick={() => {
              toggleCodeGroup(CodeGroup.ReactStyledComponent)
            }} className={clsx(styles.button, { [styles.isActive]: codeGroup === CodeGroup.ReactStyledComponent })}>
              <FaReact className={styles.icon} />
              <div className={styles.title}> + Styled Component</div>
            </Button>
            <Button onClick={() => {
              toggleCodeGroup(CodeGroup.Vue)
            }} className={clsx(styles.button, { [styles.isActive]: codeGroup === CodeGroup.Vue })}>
              <FaVuejs className={styles.icon} />
              <div className={styles.title}> Vue</div>
            </Button>
            <Button onClick={() => {
              toggleCodeGroup(CodeGroup.Angular)
            }} className={clsx(styles.button, { [styles.isActive]: codeGroup === CodeGroup.Angular })}>
              <FaAngular className={styles.icon} />
              <div className={styles.title}> Angular</div>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className={clsx(styles.inner, {
        [styles.isMobile]: displayMode === DisplayMode.Mobile,
        [styles.isTablet]: displayMode === DisplayMode.Tablet,
        [styles.isDesktop]: displayMode === DisplayMode.Desktop,
      })}>{children}</div>
    </div>
  );
};
