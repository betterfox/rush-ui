import React, { ReactNode } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollPosition from '@react-hook/window-scroll'
import NightModeToggle from "@/components/Button/NightModeToggle";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { FiGithub } from "react-icons/fi";

interface TopBarProps {
    onMobileNavOpen?: () => void;
    size?: "normal" | "small";
    hasHeroSection?: boolean;
}

const Navbar = ({ onMobileNavOpen, size = "normal", hasHeroSection, ...rest }: TopBarProps) => {
    const scrollY = useScrollPosition(60)
    return (
        <AppBar
            position="fixed"
            className={clsx(styles.navbar, {
                [styles.isTop]: scrollY == 0,
                [styles.isHeroSection]: hasHeroSection
            })}
            elevation={1}
            {...rest}
        >
            <AppContainer>
                <Toolbar className={styles.toolbar}>
                    <LeftSection></LeftSection>
                    <CenterSection>
                        <AppLogo />
                    </CenterSection>
                    <RightSection>
                        <GithubLink></GithubLink>
                        <NightModeToggle />
                    </RightSection>
                </Toolbar>
            </AppContainer>
        </AppBar>
    );
};

const GithubLink = () => {
    return (
        <a href="https://github.com/abuglife/rush-ui" className={styles.githubLink}>
            <FiGithub />
        </a>
    );
};


const AppLogo = () => {
    return (
        <Link className={styles.logo} to="/">
            <div className={styles.name}>Rush</div>
            <div className={styles.postfix}>UI</div>
        </Link>
    );
};

interface LeftSectionProps {
    children?: ReactNode;
}

const LeftSection = ({ children }: LeftSectionProps) => {
    return <div className={styles.leftSection}>{children}</div>;
};

interface AppContainerProps {
    children?: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
    return <div className={styles.appContainer}>{children}</div>;
};

interface RightSectionProps {
    children?: ReactNode;
}

const RightSection = ({ children }: RightSectionProps) => {
    return <div className={styles.rightSection}>{children}</div>;
};

interface CenterSectionProps {
    children?: ReactNode;
}

const CenterSection = ({ children }: CenterSectionProps) => {
    return <div className={styles.centerSection}>{children}</div>;
};

export default Navbar;
