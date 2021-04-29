/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import tw from 'twin.macro';

interface SeperateLineWithTextProps {
    text: string
}
const SeperateLineWithText = ({ text }: SeperateLineWithTextProps) => {
    const containerStyle = css`
        ${tw`relative block mb-8 w-40 mx-auto`}

        .text {
            ${tw`absolute top-1/2 left-1/2 bg-white px-4 text-sm text-gray-400 transform -translate-x-2/4 -translate-y-2/4`}
        }
    `
    return (
        <div css={containerStyle}>
            <hr></hr>
            <div className="text">{text}</div>
        </div>
    )
}

export default SeperateLineWithText