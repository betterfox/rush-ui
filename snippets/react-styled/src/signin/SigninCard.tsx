import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./components/SocialSigninButton";
import { Helmet } from "react-helmet";
import { Alert } from "@material-ui/lab";
import SeparateLineWithText from "./components/SeparateLineWithText";
import styles from "./SigninCard.module.scss";
import { RequestStatus } from "./enum/request.enum";

interface SigninFormDto {
  email: string;
  password: string;
}

const SigninPage = () => {
  const [data, setData] = useState({
    response: null,
    error: null,
    errorFields: null,
    status: RequestStatus.Nop,
  });

  const onSubmit = async (data: SigninFormDto) => {
    try {
      setData({
        response: null,
        error: null,
        errorFields: null,
        status: RequestStatus.Loading,
      });
      setTimeout(() => {
        // Http Request
      }, 2000);
    } catch (error) {
      setData({
        response: null,
        error: error?.message,
        errorFields: error?.errors,
        status: RequestStatus.Error,
      });
    }
    return data;
  };

  return (
    <>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <PageContainer>
        <CardContainer>
          <AppLogo />
          <PageTitleContainer>
            <PageTitle>Signin to:</PageTitle>
            <PageSubTitle>Accounting</PageSubTitle>
          </PageTitleContainer>
          <AppFormContainer>
            {data.error && (
              <Alert severity="error" className={styles.errorAlert}>
                {data.error}
              </Alert>
            )}
            <SigninForm message="Sign up" onSubmit={onSubmit}></SigninForm>
          </AppFormContainer>

          <SeparateLineWithText text="OR" />
          <SocialSignin />
        </CardContainer>
      </PageContainer>
    </>
  );
};

const AppFormContainer = styled.div`
  ${tw`mb-10`}
`;

const PageTitleContainer = styled.div`
  ${tw`text-center mb-4`}
`

const PageTitle = styled.div`
  ${tw`text-on-background opacity-50`}
`

const PageSubTitle = styled.div`
  ${tw`font-bold text-primary`}
`

const AppLogo = () => {
  return (
    <div className={styles.appLogo}>
      <img
        className={styles.logoImg}
        src="/assets/images/signin/logo-white.png"
      />
      <h2 className={styles.title}>ABugLife Studio</h2>
    </div>
  );
};

interface PageContainerProps {
  children: ReactNode;
}
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.bgBelow}></div>
      <div className={styles.bgUpper}></div>
      <div className={styles.bgColorOverlay}></div>
      <div className={styles.pageBody}>{children}</div>
    </div>
  );
};

interface CardContainerProps {
  children: ReactNode;
}
const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>{children}</div>
    </div>
  );
};

const SocialSignin = () => {
  return (
    <div className={styles.socialSigninContainer}>
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
  );
};

export default SigninPage;
