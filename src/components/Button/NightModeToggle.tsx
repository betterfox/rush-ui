
import React, { ReactPropTypes, useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { FiSun, FiMoon } from 'react-icons/fi';
import clsx from 'clsx';
import styles from './NightModeToggle.module.scss';

export default function NightModeToggle() {

    const [ isDarkMode, setIsDarkMode ] = useState(false)

    useEffect(() => {
        function setMode() {
            const themeMode = localStorage.getItem("theme")
            if(themeMode == "dark") {
                setIsDarkMode(true)
            }
        }
        setMode()
    }, [])

    useEffect(() => {
        function setMode() {
            if(isDarkMode) {
                document.body.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark")
            } else {
                document.body.setAttribute("data-theme", "");
                localStorage.setItem("theme", "light")
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