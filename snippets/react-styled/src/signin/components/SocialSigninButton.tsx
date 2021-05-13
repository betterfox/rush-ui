import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonLoadingProps {
  isLoading?: boolean;
  text: string;
  logo?: string;
  type?: "button" | "submit" | "reset";
}

export default function SocialSigninButton({
  isLoading,
  text,
  logo,
  type = "button",
}: ButtonLoadingProps) {
  return (
    <StyledButton type={type} variant="contained">
      <LogoImg src={logo} />
      <Label>{text}</Label>
    </StyledButton>
  );
}
const LogoImg = styled.img`
  ${tw`mx-auto h-8 w-8`}
`;
const Label = styled.div`
  ${tw`flex-1 text-on-surface`}
`;
const StyledButton = styled(Button)`
  ${tw`rounded relative text-primary bg-surface uppercase font-bold py-0 flex items-center justify-center w-full h-12 shadow border border-solid border-outline px-3 mb-2 text-sm tracking-wider`}
  height: var(--button-height);
  
  &:hover,
  &:focus {
    ${tw`bg-background text-on-background shadow-md`}
  }
`;
