/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from "react";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./SocialSigninButton";
import { Helmet } from "react-helmet";
import { RequestStatus } from '@/enum/request.enum';
import HttpClient from '@/utils/http-client';
import { useNavigate } from 'react-router';
import { Alert } from '@material-ui/lab';
import tw from 'twin.macro';
import SeparateLineWithText from '@/components/common/SeparateLineWithText';

interface SigninFormDto {
  email: string;
  password: string;
}

const Signin = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    response: null,
    error: null,
    errorFields: null,
    status: RequestStatus.Nop,
  })

  const onSubmit = async (data: SigninFormDto) => {
    try {
      setData({
        response: null,
        error: null,
        errorFields: null,
        status: RequestStatus.Loading
      })
      const res = await HttpClient.post('/auth', data)
      navigate(`/app/dashboard`)
    } catch (error) {
      setData({
        response: null,
        error: error?.message,
        errorFields: error?.errors,
        status: RequestStatus.Error
      })
    }
    return data
  }
  const pageStyle = css`
    ${tw`h-full min-h-screen relative flex items-center justify-center p-0 bg-black`}

    & > .bg-below {
      ${tw`absolute top-0 left-0 w-full h-full z-10 bg-gray-50 bg-cover bg-center`}
      background-image: url(/assets/images/signin/bg1.svg);
    }
    & > .bg-upper {
      ${tw`absolute top-0 left-0 w-full h-full z-20 bg-cover bg-center`}
      background-image: url(/assets/images/signin/bg.png);
    }

    & > .bg-color-overlay {
      ${tw`absolute top-0 left-0 w-full h-full bg-blue-200 opacity-25 z-30`}
    }
  `

  const containerStyle = css`
    ${tw`max-w-full w-full space-y-8 relative z-40 flex items-center

      lg:( max-w-md )
    `}

    .card {
      ${tw`shadow bg-white py-12 px-6 rounded-none w-full h-full flex flex-col items-center justify-center min-h-screen
      
        lg:(h-auto min-h-0)
      `}

      .card-inner {
        ${tw`w-full max-w-xs`}
      }
    }

    .app-title {
      ${tw`mb-4 font-medium text-gray-600 text-center`}
    }

    .app-logo {
      ${tw`mb-8`}

      img {
        ${tw`mx-auto h-20 w-auto mb-2`}
      }

      .title {
        ${tw`text-center text-xl font-extrabold text-gray-700`}
      }
    }

    .app-form {
      ${tw`mb-10`}
    }

    .social-button-container {
      & > * {
        ${tw`mb-2`}
      }
      & > *:last-child {
        ${tw`mb-0`}
      }
    }
  `

  const pageTitleStyle = css`
    ${tw`text-center mb-4`}

    .title {
      ${tw`text-gray-600`}
    }
    .subtitle {
      ${tw`font-bold text-gray-700`}
    }
  `
  return (
    <React.Fragment>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <div css={pageStyle}>
        <div className="bg-below"></div>
        <div className="bg-upper"></div>
        <div className="bg-color-overlay"></div>
        <div css={containerStyle}>
          <div className="card">
            <div className="card-inner">
              <div className="app-logo">
                <img
                  src="/assets/images/signin/logo-black.png"
                />

                <h2 className="title">SoftBox Co.LTD.</h2>
              </div>

              <div css={pageTitleStyle}>
                <div className="title">
                  Signin to:
                </div>
                <div className="subtitle">
                  Human Resouces
                </div>
              </div>

              <div className="app-form">
                {data.error && <Alert severity="error" className="mb-2">{data.error}</Alert>}
                <SigninForm message="Sign up" onSubmit={onSubmit}></SigninForm>
              </div>

              <SeparateLineWithText text="OR" />

              <div className="social-button-container">
                <SocialSigninButton
                  text="Signin with Google"
                  logo="/assets/images/social/google.png"
                  type="button"
                />

                <SocialSigninButton
                  text="Signin with Line"
                  logo="/assets/images/social/line.png"
                  type="button"
                />

                <SocialSigninButton
                  text="Signin with Microsoft"
                  logo="/assets/images/social/microsoft.png"
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;
