import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonLoadingProps {
  isLoading: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

export default function AppButtonLoading({
  isLoading,
  text,
  type = "button",
}: ButtonLoadingProps) {
  return (
    <StyledButton type={type} variant="contained">
      <PulseLoader color="#FFFFFF" loading={isLoading} size={6} />
      {!isLoading && <div className="label">{text}</div>}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  ${tw`rounded relative text-on-primary bg-primary uppercase font-bold border-none py-3 flex items-center justify-center w-full h-12 shadow px-3 mb-2 text-sm`}
    &:hover,
    &:focus {
      ${tw`bg-primary text-on-primary shadow-lg`}
    }
`;
