import { Button, Drawer } from "@material-ui/core";
import React, { ReactNode, useEffect, useState } from "react";
import { withFormik, FormikProps, FormikErrors, Form, FormikBag } from "formik";
import styles from './ThemeConfiguration.module.scss';
import { FiFeather } from 'react-icons/fi';
import NightModeToggle from './Button/NightModeToggle';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const ThemeConfiguration = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const onSelected = (colorScheme: string) => {
    const themeMode = localStorage.getItem("theme") || ""
    if (themeMode.includes('dark')) {
      localStorage.setItem("theme", `dark-${colorScheme}`)
    } else {
      localStorage.setItem("theme", colorScheme)
    }
  }

  useEffect(() => {
    const handler = () => {
      const themeMode = localStorage.getItem("theme") || ""
      if (themeMode) {
        document.body.setAttribute("data-theme", themeMode);
      }
    }
    window.addEventListener("storage", handler);
    () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <>
      <Button className={styles.btnToggle} onClick={toggleDrawer}>
        <FiFeather />
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer} BackdropProps={{ invisible: true }}>
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
              <List className={styles.themeList}>
                <ListItem button className={styles.item} onClick={() => {
                  onSelected('green')
                }}>
                  <div className={styles.icon} style={{
                    backgroundColor: '#10B981'
                  }}></div>
                  <div className={styles.text}>Green</div>
                </ListItem>
                <ListItem button className={styles.item} onClick={() => {
                  onSelected('blue')
                }}>
                  <div className={styles.icon} style={{
                    backgroundColor: '#16679a'
                  }}></div>
                  <div className={styles.text}>Blue</div>
                </ListItem>
                <ListItem button className={styles.item} onClick={() => {
                  onSelected('viridian-green')
                }}>
                  <div className={styles.icon} style={{
                    backgroundColor: '#0e9594'
                  }}></div>
                  <div className={styles.text}>Viridian Green</div>
                </ListItem>
                <ListItem button className={styles.item} onClick={() => {
                  onSelected('indigo')
                }}>
                  <div className={styles.icon} style={{
                    backgroundColor: '#8B5CF6'
                  }}></div>
                  <div className={styles.text}>Indigo</div>
                </ListItem>
                <ListItem button className={styles.item} onClick={() => {
                  onSelected('orange')
                }}>
                  <div className={styles.icon} style={{
                    backgroundColor: '#ff8500'
                  }}></div>
                  <div className={styles.text}>Orange</div>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default ThemeConfiguration