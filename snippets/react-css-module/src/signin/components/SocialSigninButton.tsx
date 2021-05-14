import React from 'react';
import { Button } from '@material-ui/core';
import styles from './SocialSigninButton.module.scss';

interface ButtonLoadingProps {
  isLoading?: boolean,
  text: string,
  logo?: string,
  type?: "button" | "submit" | "reset",
}

export default function SocialSigninButton({ isLoading, text, logo, type = 'button' }: ButtonLoadingProps) {

  return (
    <Button type={type} className={styles.button} variant="contained">
      <img
        className={styles.logoImg}
        src={logo}
      />
      <div className={styles.label}>{text}</div>
    </Button>
  )
}