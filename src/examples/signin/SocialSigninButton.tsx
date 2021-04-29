/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import tw from 'twin.macro';
import PulseLoader from "react-spinners/PulseLoader";
import { Button } from '@material-ui/core';

interface ButtonLoadingProps {
    isLoading?: boolean,
    text: string,
    logo?: string,
    type?: "button" | "submit" | "reset",
}

export default function SocialSigninButton({ isLoading, text, logo, type = 'button' }: ButtonLoadingProps) {

    const submitBtnStyle = css`
        ${tw`rounded relative text-primary bg-white uppercase font-bold border-none py-3 h-auto flex items-center justify-center w-full h-12 shadow`}

        .label {
            ${tw`flex-1 text-gray-600`}
        }
        &:hover, &:focus {
            ${tw`bg-gray-100 text-gray-700 shadow-md`}
        }
    `

    return (
        <Button type={type} css={submitBtnStyle} variant="contained">
            <img
              className="mx-auto h-8 w-8"
              src={logo}
            />
            <div className="label">{text}</div>
        </Button>
    )
}