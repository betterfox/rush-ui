import React from "react";
import styled from "styled-components";
import tw from 'twin.macro';

interface SeparateLineWithTextProps {
  text: string;
}
const SeparateLineWithText = ({ text }: SeparateLineWithTextProps) => {
  return (
    <Container>
      <HR></HR>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`${tw`relative block mb-8 w-40 mx-auto`}`;
const HR = styled.hr`${tw`border border-background`}`;
const Text = styled.div`${tw`absolute top-1/2 left-1/2 bg-surface px-4 text-sm text-secondary transform -translate-x-2/4 -translate-y-2/4`}`;

export default SeparateLineWithText;
