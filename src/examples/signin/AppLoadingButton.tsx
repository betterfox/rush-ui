/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import tw from 'twin.macro';
import PulseLoader from "react-spinners/PulseLoader";
import { Button } from '@material-ui/core';

interface ButtonLoadingProps {
    isLoading: boolean,
    text: string,
    type?: "button" | "submit" | "reset",
}

export default function AppButtonLoading({ isLoading, text, type = 'button' }: ButtonLoadingProps) {

    const submitBtnStyle = css`
        ${tw`rounded relative text-white bg-green-500 uppercase font-bold border-none py-3 h-auto flex items-center justify-center w-full h-12 shadow`}
        &:hover, &:focus {
            ${tw`bg-green-600 text-white shadow-lg`}
        }
    `

    return (
        <Button type={type} css={submitBtnStyle} variant="contained">
            <PulseLoader color={'#FFF'} loading={isLoading} size={8} />
            { !isLoading && <div className="label">{text}</div> }
        </Button>
    )
}