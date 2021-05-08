import React, { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollPosition from '@react-hook/window-scroll'
import AppSearchBox from "@/components/AppSearchBox";
import NightModeToggle from "@/components/Button/NightModeToggle";
import styles from "./Navbar.module.scss";
import clsx from "clsx";

interface TopBarProps {
    onMobileNavOpen?: () => void;
    size?: "normal" | "small";
    hasHeroSection?: boolean;
}

const Navbar = ({ onMobileNavOpen, size = "normal", ...rest }: TopBarProps) => {
    const scrollY = useScrollPosition(60)
    return (
        <AppBar
            position="fixed"
            className={clsx(styles.navbar, {
                [styles.isTop]: scrollY == 0
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
                        <NightModeToggle />
                    </RightSection>
                </Toolbar>
            </AppContainer>
        </AppBar>
    );
};

const AppLogo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.name}>Rush</div>
            <div className={styles.postfix}>UI</div>
        </div>
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
