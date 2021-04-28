
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { ReactPropTypes, useState } from "react";
import { Button } from '@material-ui/core';
import { FiSun, FiMoon } from 'react-icons/fi';
import tw from 'twin.macro';
import clsx from 'clsx';

export default function NightModeToggle() {

    const [ isDarkMode, setIsDarkMode ] = useState(false)

    const buttonStyle = css`
        ${tw`rounded-full relative w-16 h-8 min-w-0 bg-black bg-opacity-25`}

        .selected {
            ${tw`w-1/2 h-full absolute left-1/2 top-0 p-0.5`}
            ${tw`transition-all transform duration-200 ease-in-out`}

            .toggle-circle {
                ${tw`rounded-full w-full h-full bg-white shadow`}
            }
        }

        .item {
            ${tw`w-1/2 flex items-center justify-center text-xl p-0 transform`}

            &.is-light {
                ${tw`-translate-x-1 text-yellow-500`}
            }
            &.is-dark {
                ${tw`translate-x-1 text-yellow-500`}
            }
        }

        &.is-dark-mode {
            ${tw`bg-opacity-75`}
            .selected {
                ${tw`left-0`}
                
                .toggle-circle {
                    ${tw`bg-gray-600`}
                }
            }
        }
    `

    return (
        <Button css={buttonStyle} 
            className={clsx({ 'is-dark-mode': isDarkMode })}
            onClick={() => {
                setIsDarkMode(!isDarkMode)
            }}>
            <div className="item is-light">
                <FiSun />
            </div>
            <div className="item is-dark">
                <FiMoon />
            </div>
            <div className="selected">
                <div className="toggle-circle"></div>
            </div>
        </Button>
    )
}