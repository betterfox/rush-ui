import React from "react";
import { ShowCaseContainer, ShowCaseSection } from "@/pages/ShowCase/ShowCase";
import IframeResizer from "iframe-resizer-react";
import { ShowCaseFrame } from "../ShowCase/ShowCase";

const SigninPage = () => {
  return (
    <ShowCaseContainer>
      <ShowCaseSection title="Card Style" subtitle="With illustration background for any common login page / register page">
        <ShowCaseFrame reactCssModuleCode={signinCardCode} reactCssModuleStyle={signinCodeStyle}>
          <IframeResizer
            src="http://localhost:3000/examples/signin"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection>

      {/* <ShowCaseSection title="Split Screen" subtitle="Show content in one side with carousel style, your can swap a side you want">
        <ShowCaseFrame>
          <IframeResizer
            src="http://localhost:3000/examples/signin/split-screen"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection> */}

      <ShowCaseSection title="Split Card" subtitle="Same as split screen plus card style">
        <ShowCaseFrame>
          <IframeResizer
            src="http://localhost:3000/examples/signin/split-card"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection>
    </ShowCaseContainer>
  );
};

const signinCodeStyle = `.appLogo {
  @apply mb-8;

  .logoImg {
    @apply mx-auto h-20 w-auto mb-2;
  }

  .title {
    @apply text-center text-xl font-extrabold text-gray-700;
  }
}

.page {
  @apply h-full min-h-screen relative flex items-center justify-center p-0 bg-black py-0;

  @screen md {
    @apply py-20;
  }

  .bgUpper {
    @apply absolute top-0 left-0 w-full h-full z-20 bg-cover bg-center;
    background-image: url(/assets/images/signin/bg.png);
  }

  .bgBelow {
    @apply absolute top-0 left-0 w-full h-full z-10 bg-gray-50 bg-cover bg-center;
    background-image: url(/assets/images/signin/bg1.svg);
  }

  .bgColorOverlay {
    @apply absolute top-0 left-0 w-full h-full bg-blue-200 opacity-25 z-30;
  }

  .pageBody {
    @apply max-w-full w-full space-y-8 relative z-40 flex items-center;
  
    @screen md {
      @apply max-w-md;
    }
  }
}

.card {
  @apply shadow bg-white py-20 px-6 z-40 rounded w-full h-full flex flex-col items-center justify-center min-h-screen;

  @screen md {
    @apply h-auto min-h-0;
  }

  .cardInner {
    @apply w-full max-w-xs;
  }
}

.pageTitle {
  @apply text-center mb-4;

  .title {
    @apply text-gray-600;
  }
  .subtitle {
    @apply font-bold text-gray-700;
  }
}

.socialSigninContainer {
  & > * {
    @apply mb-2;
  }
  & > *:last-child {
    @apply mb-0;
  }
}

.form {
  @apply mb-10
}

.errorAlert {
  @apply mb-2;
}`

const signinCardCode = `import React, { ReactNode, useState } from "react";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./components/SocialSigninButton";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Alert } from "@material-ui/lab";
import SeparateLineWithText from "./components/SeparateLineWithText";
import styles from "./SigninCard.module.scss";
import { RequestStatus } from "./enum/request.enum";

interface SigninFormDto {
  email: string;
  password: string;
}

const SigninPage = () => {
  const navigate = useNavigate();
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
          <PageTitle />
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

interface AppFormContainerProps {
  children: ReactNode;
}

const AppFormContainer = ({ children }: AppFormContainerProps) => {
  return <div className={styles.form}>{children}</div>;
};

const PageTitle = () => {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.title}>Signin to:</div>
      <div className={styles.subtitle}>Accounting</div>
    </div>
  );
};

const AppLogo = () => {
  return (
    <div className={styles.appLogo}>
      <img
        className={styles.logoImg}
        src="/assets/images/signin/logo-black.png"
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

export default SigninPage;`

export default SigninPage;
