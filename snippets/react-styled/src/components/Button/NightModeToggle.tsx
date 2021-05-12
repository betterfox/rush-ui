
import React, { ReactPropTypes, useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { FiSun, FiMoon } from 'react-icons/fi';
import clsx from 'clsx';
import styles from './NightModeToggle.module.scss';

export default function NightModeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        function setMode() {
            const themeMode = localStorage.getItem("theme") || ""
            if (themeMode.includes('dark')) {
                setIsDarkMode(true)
            }
        }
        setMode()
    }, [])

    useEffect(() => {
        function setMode() {
            const themeMode = localStorage.getItem("theme") || ""
            if (isDarkMode) {
                const nextTheme = themeMode.replace("dark-", "")
                if(nextTheme) {
                    document.body.setAttribute("data-theme", "dark-" + nextTheme);
                    localStorage.setItem("theme", "dark-" + nextTheme)
                } else {
                    document.body.setAttribute("data-theme", "dark");
                    localStorage.setItem("theme", "dark")
                }
            } else {
                const nextTheme = themeMode.replace("dark-", "")
                if(nextTheme) {
                    document.body.setAttribute("data-theme", nextTheme);
                    localStorage.setItem("theme", nextTheme)
                } else {
                    document.body.setAttribute("data-theme", "");
                    localStorage.setItem("theme", "")
                }
            }
        }
        setMode()
    }, [isDarkMode])

    return (
        <Button
            className={clsx(styles.button, { [styles.isDarkMode]: isDarkMode })}
            onClick={() => {
                setIsDarkMode(!isDarkMode)
            }}>
            <div className={clsx(styles.item, styles.isLight)}>
                <FiSun />
            </div>
            <div className={clsx(styles.item, styles.isDark)}>
                <FiMoon />
            </div>
            <div className={styles.selected}>
                <div className={styles.toggleCircle}></div>
            </div>
        </Button>
    )
}