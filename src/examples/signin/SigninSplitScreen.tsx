import React, { ReactNode, useState } from "react";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./components/SocialSigninButton";
import { RequestStatus } from "./enum/request.enum";
import styles from "./SigninSplitScreen.module.scss";
import SeparateLineWithText from "./components/SeparateLineWithText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Button } from "@material-ui/core";
import { FiArrowRight } from "react-icons/fi";

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
    <PageContainer>
      <ContentSection />
      <CardContainer>
        <AppLogo />
        
        <PageTitle />
        <AppFormContainer>
          <SigninForm message="Sign up" onSubmit={onSubmit}></SigninForm>
        </AppFormContainer>

        <SeparateLineWithText text="OR" />

        <SocialSignin />
      </CardContainer>
    </PageContainer>
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

const ContentSection = () => {
  return (
    <Swiper
      className={styles.contentContainer}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.sliderItem}>
        <div
          className={styles.sliderItemBg}
          style={{
            backgroundImage: "url(/assets/images/signin/highlight-bg1.png)",
          }}
        ></div>

        <div className={styles.heroContentContainer}>
          <div className={styles.inner}>
            <div className={styles.title}>Rush Accounting</div>
            <div className={styles.subtitle}>
              One-stop online <b>Accounting</b> service
              <br />
              For small businesses, entrepreneurs and freelancers.
            </div>

            <Button className={styles.button} variant="contained">
              Create new account
              <FiArrowRight className={styles.icon} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={styles.sliderItem}
        style={{
          backgroundImage: "url(/assets/images/signin/highlight-bg2.png)",
        }}
      >
        Item2
      </SwiperSlide>
    </Swiper>
  );
};

export default SigninPage;
