import React from "react";
import styles from './SeparateLineWithText.module.scss';

interface SeparateLineWithTextProps {
  text: string
}
const SeparateLineWithText = ({ text }: SeparateLineWithTextProps) => {
  return (
    <div className={styles.container}>
      <hr></hr>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default SeparateLineWithText