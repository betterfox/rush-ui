import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const AppLogo = () => {
  return (
    <Container>
      <AppLogoImage src="/assets/images/signin/logo-white.png" />
      <AppTitle>ABugLife Studio</AppTitle>
    </Container>
  );
};

const Container = styled.div`
  width: var(--sidebar-width);
  ${tw`px-5 flex items-center shadow-lg h-full`}
`;

const AppLogoImage = styled.img`
  ${tw`h-8 w-auto opacity-100 mix-blend-difference`}
`;

const AppTitle = styled.div`
  ${tw`ml-4 text-center text-base font-extrabold text-on-primary`}
`;

export default AppLogo;
