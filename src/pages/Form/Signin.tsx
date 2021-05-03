import React from "react";
import { ShowCaseContainer, ShowCaseSection } from "@/pages/ShowCase/ShowCase";
import Iframe from "react-iframe";

const SigninPage = () => {
  return (
    <ShowCaseContainer>
      <ShowCaseSection title="Signin Page">
          <Iframe
            display="block"
            position="relative"
            url="http://localhost:3000/examples/signin"
            width="100%"
            height="500"
          />
      </ShowCaseSection>
    </ShowCaseContainer>
  );
};

export default SigninPage;
