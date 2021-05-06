
import React, { ReactPropTypes, useState } from "react";
import { Button } from '@material-ui/core';
import { FiSun, FiMoon } from 'react-icons/fi';
import clsx from 'clsx';
import styles from './NightModeToggle.module.scss';

export default function NightModeToggle() {

    const [ isDarkMode, setIsDarkMode ] = useState(false)

    return (
        <Button 
            className={clsx(styles.button, { 'is-dark-mode': isDarkMode })}
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