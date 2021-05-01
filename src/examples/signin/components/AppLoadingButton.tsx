import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { Button } from '@material-ui/core';
import styles from './AppLoadingButton.module.scss';

interface ButtonLoadingProps {
    isLoading: boolean,
    text: string,
    type?: "button" | "submit" | "reset",
}

export default function AppButtonLoading({ isLoading, text, type = 'button' }: ButtonLoadingProps) {
    return (
        <Button className={styles.button} type={type} variant="contained">
            <PulseLoader color={'#FFF'} loading={isLoading} size={8} />
            { !isLoading && <div className="label">{text}</div> }
        </Button>
    )
}