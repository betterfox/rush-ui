import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./components/SocialSigninButton";
import { RequestStatus } from "./enum/request.enum";
import SeparateLineWithText from "./components/SeparateLineWithText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@material-ui/core";
import {
  FiArrowRight,
  FiShoppingBag,
  FiThumbsUp,
  FiTrendingUp,
  FiTruck,
} from "react-icons/fi";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

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
        <Card>
          <CardBody>
            <FormContainer>
              <FormInner>
                <AppLogo />
                <PageTitleContainer>
                  <PageTitle>Signin to:</PageTitle>
                  <PageSubTitle>Accounting</PageSubTitle>
                </PageTitleContainer>

                <AppFormContainer>
                  <SigninForm
                    message="Sign up"
                    onSubmit={onSubmit}
                  ></SigninForm>
                </AppFormContainer>

                <SeparateLineWithText text="OR" />

                <SocialSigninContainer>
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
                </SocialSigninContainer>
              </FormInner>
            </FormContainer>

            <ContentSection />
          </CardBody>
        </Card>
      </CardContainer>
      <Footer>
        <FooterLinkContainer>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterSeparateDot>•</FooterSeparateDot>
          <FooterLink>User Notice</FooterLink>
        </FooterLinkContainer>
        <CopyRight>@ 2021 ABugLife Studio, Inc. All rights reserved</CopyRight>
      </Footer>
    </PageContainer>
  );
};

const AppLogo = () => {
  return (
    <AppLogoContainer>
      <AppLogoImage src="/assets/images/signin/logo-white.png" />
      <AppTitle>ABugLife Studio</AppTitle>
    </AppLogoContainer>
  );
};

const AppFormContainer = styled.div`
  ${tw`mb-10`}
`;

const PageTitleContainer = styled.div`
  ${tw`text-center mb-4`}
`;

const PageTitle = styled.div`
  ${tw`text-on-background opacity-50`}
`;

const PageSubTitle = styled.div`
  ${tw`font-bold text-primary`}
`;

const AppLogoContainer = styled.div`
  ${tw`mb-8 bg-surface`}
`;

const AppLogoImage = styled.img`
  ${tw`mx-auto h-20 w-auto mb-2 opacity-75 mix-blend-difference`}
`;

const AppTitle = styled.div`
  ${tw`text-center text-xl font-extrabold text-on-background`}
`;

const SocialSigninContainer = styled.div`
  & > * {
    ${tw`mb-2`}
  }
  & > *:last-child {
    ${tw`mb-0`}
  }
`;

interface PageContainerProps {
  children: ReactNode;
}
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Page>
      <PageBgUpper></PageBgUpper>
      <PageBgOverlay></PageBgOverlay>
      <PageBody>{children}</PageBody>
    </Page>
  );
};

const Page = styled.div`
  ${tw`h-full min-h-screen relative flex items-center justify-center p-0 bg-background`}
`;
const PageBgUpper = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full z-20 bg-cover bg-center mix-blend-multiply`}
  background-image: url(/assets/images/signin/bg2.png);
`;

const PageBgOverlay = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full bg-primary opacity-5 z-30 mix-blend-multiply`}
`;
const PageBody = styled.div`
  ${tw`max-w-full w-full relative z-40 flex flex-col items-center min-h-screen px-4`}
`;

const FormContainer = styled.div`
  ${tw`w-full py-8 px-4
    md:( h-auto min-h-0 py-16 w-1/2 )`}
`;

const FormInner = styled.div`
  ${tw`max-w-none mx-auto
    md:(max-w-xs)
  `}
`;

const CardContainer = styled.div`
  ${tw`flex-1 flex items-center w-full max-w-6xl mx-auto pt-4
    md:(pt-8)
  `}
`;
const Card = styled.div`
  ${tw`shadow-xl bg-surface py-12 px-4 z-40 rounded-lg w-full h-full flex items-center justify-center min-h-0
    md:( h-auto min-h-0 py-0 px-0 )
  `}
`;

const CardBody = styled.div`
  ${tw`w-full flex items-stretch justify-center`}
`;

const Footer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full px-4 py-4 sticky
    md:(px-8 py-8)
  `}
`;

const CopyRight = styled.div`
  ${tw`text-on-background opacity-25 text-center whitespace-nowrap text-sm
    md:(text-base)
  `}
`;

const FooterLinkContainer = styled.div`
  ${tw`flex items-center mb-1 space-x-4 text-sm
    md:(mb-4 text-base)
  `}
`;

const FooterLink = styled.a`
  ${tw`text-on-background opacity-50 cursor-pointer text-sm
    md:(text-base)
  `}

  &:hover {
    ${tw`text-primary opacity-100`}
  }
`;

const FooterSeparateDot = styled.div`
  ${tw`opacity-50`}
`;

const AppSwiper = ({ className, children }: any) => (
  <Swiper
    className={className}
    spaceBetween={0}
    slidesPerView={1}
    effect="fade"
    autoplay={true}
    navigation={true}
    pagination={{ clickable: true }}
    onSlideChange={() => console.log("slide change")}
  >
    {children}
  </Swiper>
);

const StyledSwiper = styled(AppSwiper)`
  ${tw`w-1/2 hidden items-center justify-center flex-col
    md:(flex)
  `}
  --swiper-pagination-color: var(--background);
  --swiper-navigation-color: var(--background);
`;

const SliderItemBg = styled.div`
  ${tw`w-full h-full absolute left-0 top-0 bg-cover backdrop-filter  backdrop-blur`}

  &:before {
    ${tw`absolute top-0 w-full h-full left-0 block z-0 opacity-50 bg-black`}
    content: "";
  }
  &:after {
    ${tw`absolute top-0 w-full h-full left-0 block z-0 opacity-50 bg-primary`}
    content: "";
  }
`;

const SliderItemContainer = styled.div`
  ${tw`w-full h-full flex items-center z-40 relative`}
`;
const SliderItemBody = styled.div`
  ${tw`p-8 px-16 text-center mx-auto
  2xl:( p-12 px-20 )
`}
`;
const SliderItemTitle = styled.div`
  ${tw`text-2xl font-bold text-white  filter drop-shadow mb-2
  lg:( text-4xl )
  2xl:( text-5xl )`}
`;
const SliderItemSubTitle = styled.div`
  ${tw`text-lg text-white leading-relaxed filter drop-shadow mb-16 text-center
  lg:( text-xl )
  2xl:( text-2xl )`}
`;
const SliderItemList = styled.div`
  ${tw`mb-32`}
`;
const SliderItemListItem = styled.div`
  ${tw`flex items-center mb-4`}
`;
const SliderItemIcon = styled.div`
  ${tw`mr-6 text-4xl text-white`}
`;
const SliderItemText = styled.div`
  ${tw`mr-6 text-xl text-white`}
`;

const Icon = styled.div`
  ${tw`ml-6 text-2xl`}
`;

const StyledSliderPrimaryButton = styled(Button)`
  ${tw`rounded-full relative text-white bg-transparent uppercase font-bold border-2 border-white border-solid py-6 flex items-center justify-center w-auto pl-8 h-8 shadow-none text-base mx-auto
    xl:( pl-12 h-12 text-lg )
`}

  &:hover,
  &:focus {
    ${tw`bg-gray-100 text-gray-700 shadow-md`}
  }

  ${Icon}
`;

const ContentSection = () => {
  return (
    <StyledSwiper>
      <SwiperSlide>
        <SliderItemBg
          style={{
            backgroundImage: "url(/assets/images/signin/highlight-bg1.png)",
          }}
        />

        <SliderItemContainer>
          <SliderItemBody>
            <SliderItemTitle>Rush Accounting</SliderItemTitle>
            <SliderItemSubTitle>Accounting have more fun</SliderItemSubTitle>
            <SliderItemList>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiShoppingBag />
                </SliderItemIcon>
                <SliderItemText>
                  perspiciatis unde omnis iste natus
                </SliderItemText>
              </SliderItemListItem>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiTrendingUp />
                </SliderItemIcon>
                <SliderItemText>numquam eius modi tempora</SliderItemText>
              </SliderItemListItem>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiThumbsUp />
                </SliderItemIcon>
                <SliderItemText>Nam libero tempore</SliderItemText>
              </SliderItemListItem>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiTruck />
                </SliderItemIcon>
                <SliderItemText>cupidatat non proident</SliderItemText>
              </SliderItemListItem>
            </SliderItemList>

            <StyledSliderPrimaryButton variant="contained">
              Create new account
              <Icon>
                <FiArrowRight />
              </Icon>
            </StyledSliderPrimaryButton>
          </SliderItemBody>
        </SliderItemContainer>
      </SwiperSlide>
      
      <SwiperSlide>
        <SliderItemBg
          style={{
            backgroundImage: "url(/assets/images/signin/highlight-bg1.png)",
          }}
        />

        <SliderItemContainer>
          <SliderItemBody>
            <SliderItemTitle>Rush Accounting</SliderItemTitle>
            <SliderItemSubTitle>Accounting have more fun</SliderItemSubTitle>
            <SliderItemList>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiTrendingUp />
                </SliderItemIcon>
                <SliderItemText>numquam eius modi tempora</SliderItemText>
              </SliderItemListItem>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiShoppingBag />
                </SliderItemIcon>
                <SliderItemText>
                  perspiciatis unde omnis iste natus
                </SliderItemText>
              </SliderItemListItem>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiTruck />
                </SliderItemIcon>
                <SliderItemText>cupidatat non proident</SliderItemText>
              </SliderItemListItem>
              <SliderItemListItem>
                <SliderItemIcon>
                  <FiThumbsUp />
                </SliderItemIcon>
                <SliderItemText>Nam libero tempore</SliderItemText>
              </SliderItemListItem>
            </SliderItemList>

            <StyledSliderPrimaryButton variant="contained">
              Create new account
              <Icon>
                <FiArrowRight />
              </Icon>
            </StyledSliderPrimaryButton>
          </SliderItemBody>
        </SliderItemContainer>
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default SigninPage;
