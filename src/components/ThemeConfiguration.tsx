import { Button, Drawer } from "@material-ui/core";
import React, { ReactNode, useState } from "react";
import { withFormik, FormikProps, FormikErrors, Form, FormikBag } from "formik";
import styles from './ThemeConfiguration.module.scss';
import { FiFeather } from 'react-icons/fi';
import NightModeToggle from './Button/NightModeToggle';

const ThemeConfiguration = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Button className={styles.btnToggle} onClick={toggleDrawer}>
                <FiFeather />
            </Button>
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
                <div className={styles.listContainer}>
                    <div className={styles.listItem}>
                        <div className={styles.title}>
                            Dark Mode
                        </div>
                        <div className={styles.body}>
                            <NightModeToggle />
                        </div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.title}>
                            Theme
                        </div>
                        <div className={styles.body}>
                            
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default ThemeConfiguration