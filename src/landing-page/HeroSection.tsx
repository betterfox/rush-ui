
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { ReactPropTypes, useState } from "react";
import tw from 'twin.macro';

export default function Example() {
  const containerStyle = css`
    ${tw`bg-primary-dark overflow-hidden relative`}
    background: #141E30;
    background: -webkit-linear-gradient(to right, #243B55, #141E30);
    background: linear-gradient(to right, #243B55, #141E30);
    
    &:after {
      ${tw`absolute top-0 w-full h-full left-0 block z-0`}
      content: '';
      background: linear-gradient(342deg, rgba(131,58,180,0) 0%, rgba(0,150,199,0.25) 72%, rgba(252,176,69,0) 100%);
    }

    .app-container {
      ${tw`relative z-10`}
    }
    .hero-heading {
      ${tw`py-20`}
      padding-top: calc(var(--navbar-topest-height) + 10rem);

      .title {
        ${tw`text-5xl font-bold text-white mb-2 filter drop-shadow-lg`}
      }
      .subtitle {
        ${tw`text-6xl font-bold text-primary filter drop-shadow-lg`}
      }
    }
  `

  const previewStyle = css`
    ${tw`absolute top-1/2 left-1/2 grid grid-cols-2 gap-4 transform`}
    width: 800px;

    img {
      ${tw`h-auto rounded-lg filter drop-shadow-lg`}
    }

    .item1 {
      ${tw`ml-auto transform -translate-y-0 w-60`}
    }
    .item2 {
      ${tw`transform -translate-y-8`}
    }
    
    .item {
      
      &:after {
        ${tw`absolute top-0 w-full h-full left-0 block z-0`}
        content: '';
        background: linear-gradient(180deg, rgba(36, 59, 85, 0) 0%, rgba(36, 59, 85, 0) 40%, rgba(36, 59, 85, 1) 100%);
      }
    }
  `

  return (
    <div css={containerStyle}>
      <div className="app-container">
        <div className="hero-heading">
          <div className="title">Ready to use UI Components</div>
          <div className="subtitle">Crafted with TailwindCSS</div>
        </div>
        <div css={previewStyle}>
          <div className="item item1">
            <img src="/assets/images/signin.png" />
          </div>
          <div className="item item2">
           <img src="/assets/images/preview1.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}