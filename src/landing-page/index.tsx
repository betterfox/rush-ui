/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import clsx from 'clsx';
import React from 'react';
import tw from 'twin.macro';
import HeroSection from './HeroSection';

const LandingPage = () => {
    const containerStyle = css`
        ${tw`pt-12`}
        .section {
            .section-heading {
                ${tw`border-b mb-4 py-4 mt-4`}
                
                .title {
                    ${tw`text-2xl font-bold mb-1`}
                }
                .subtitle {
                    ${tw`text-gray-500`}
                }
            }
        }
    `

    return <React.Fragment>
        <HeroSection />

        <div css={containerStyle} className={clsx('app-container')}>
            <div className="section">
                <div className="section-heading">
                    <div className="title">Application UI</div>
                    <div className="subtitle">Form layouts, tables, modal windows — everything you need to build beautiful responsive web applications.</div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default LandingPage;