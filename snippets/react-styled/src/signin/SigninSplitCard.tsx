import React, { ReactNode, useState } from "react";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./components/SocialSigninButton";
import { RequestStatus } from "./enum/request.enum";
import styles from "./SigninSplitCard.module.scss";
import SeparateLineWithText from "./components/SeparateLineWithText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@material-ui/core";
import { FiArrowRight, FiShoppingBag, FiThumbsUp, FiTrendingUp, FiTruck } from "react-icons/fi";
import SwiperCore, {
  EffectFade,Navigation,Pagination, Autoplay
} from 'swiper/core';
SwiperCore.use([EffectFade,Navigation,Pagination, Autoplay]);

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
      <CardContainer>
        <FormContainer>
          <AppLogo />
          <PageTitle />

          <AppFormContainer>
            <SigninForm message="Sign up" onSubmit={onSubmit}></SigninForm>
          </AppFormContainer>

          <SeparateLineWithText text="OR" />

          <SocialSignin />
        </FormContainer>
        <ContentSection />
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

interface FormContainerProps {
  children: ReactNode;
}
const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBody}>{children}</div>
    </div>
  );
};

interface CardContainerProps {
  children: ReactNode;
}
const CardContainer = ({ children }: CardContainerProps) => {
  return <div className={styles.card}>{children}</div>;
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
      effect="fade"
      autoplay={true}
      navigation={true}
      pagination={{ clickable: true }}
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
            <div className={styles.subtitle}>Accounting have more fun</div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <FiShoppingBag className={styles.icon} />
                <div className={styles.listText}>perspiciatis unde omnis iste natus</div>
              </li>
              <li className={styles.item}>
                <FiTrendingUp className={styles.icon} />
                <div className={styles.listText}>numquam eius modi tempora</div>
              </li>
              <li className={styles.item}>
                <FiThumbsUp className={styles.icon} />
                <div className={styles.listText}>Nam libero tempore</div>
              </li>
              <li className={styles.item}>
                <FiTruck className={styles.icon} />
                <div className={styles.listText}>cupidatat non proident</div>
              </li>
            </ul>

            <Button className={styles.button} variant="contained">
              Create new account
              <FiArrowRight className={styles.icon} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={styles.sliderItem}
      >
        <div
          className={styles.sliderItemBg}
          style={{
            backgroundImage: "url(/assets/images/signin/highlight-bg2.png)",
          }}
        ></div>

        <div className={styles.heroContentContainer}>
          <div className={styles.inner}>
            <div className={styles.title}>Rush Accounting</div>
            <div className={styles.subtitle}>Accounting have more fun</div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <FiShoppingBag className={styles.icon} />
                <div className={styles.listText}>perspiciatis unde omnis iste natus</div>
              </li>
              <li className={styles.item}>
                <FiTrendingUp className={styles.icon} />
                <div className={styles.listText}>numquam eius modi tempora</div>
              </li>
              <li className={styles.item}>
                <FiThumbsUp className={styles.icon} />
                <div className={styles.listText}>Nam libero tempore</div>
              </li>
              <li className={styles.item}>
                <FiTruck className={styles.icon} />
                <div className={styles.listText}>cupidatat non proident</div>
              </li>
            </ul>

            <Button className={styles.button} variant="contained">
              Create new account
              <FiArrowRight className={styles.icon} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SigninPage;
