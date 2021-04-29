/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import tw from "twin.macro";
import React from "react";
import { Formik } from "formik";
import FormInput from "./FormInput";
import AppButtonLoading from "./AppLoadingButton";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./SocialSigninButton";

interface SigninFormDto {
  email: string;
  password: string;
}

const Signin = () => {
  const onSubmit = (dto: SigninFormDto) => {
    console.log(dto);
  };
  return (
    <div className="h-full min-h-screen relative flex flex-col items-center justify-center p-0  bg-black">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-1 bg-black bg-cover bg-center"
        css={css`
          background-image: url(/assets/images/signin/bg.jpg);
          filter: blur(8px);
        `}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-2"></div>
      <div className="h-full w-full relative z-2 flex flex-grow">
        <div className="w-1/2 hidden lg:flex items-center justify-center flex-col">
          <img
            className="mx-auto h-40 w-auto mb-8"
            src="/assets/images/signin/logo-white.png"
          />

          <h2 className="text-center text-2xl text-white">
            We built quality software in a box.
          </h2>
        </div>
        <div className="shadow bg-white p-8 w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="mb-10">
              <img
                className="mx-auto h-20 w-auto mb-2"
                src="/assets/images/signin/logo-black.png"
              />

              <h2 className="text-center text-xl font-extrabold text-gray-700">
                SoftBox Co.LTD.
              </h2>
            </div>

            <div className="mb-10">
              <SigninForm message="Sign up" onSubmit={onSubmit}></SigninForm>
            </div>

            <div className="relative block mb-8 w-40 mx-auto">
              <hr></hr>
              <div className="absolute top-1/2 left-1/2 bg-white px-4 text-sm text-gray-400 transform -translate-x-2/4 -translate-y-2/4">
                OR
              </div>
            </div>

            <div className="mb-2">
              <SocialSigninButton
                text={`Signin with Google`}
                logo={`/assets/images/social/google.png`}
                type="button"
              />
            </div>

            <div className="mb-2">
              <SocialSigninButton
                text={`Signin with Line`}
                logo={`/assets/images/social/line.png`}
                type="button"
              />
            </div>

            <div className="mb-2">
              <SocialSigninButton
                text={`Signin with Microsoft`}
                logo={`/assets/images/social/microsoft.png`}
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
