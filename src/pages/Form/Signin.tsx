import React from "react";
import { ShowCaseContainer, ShowCaseSection } from "@/pages/ShowCase/ShowCase";
import IframeResizer from "iframe-resizer-react";
import { ShowCaseFrame } from "../ShowCase/ShowCase";

const SigninPage = () => {
  return (
    <ShowCaseContainer>
      <ShowCaseSection title="Signin Page">
        <ShowCaseFrame>
          <IframeResizer
            src="http://localhost:3000/examples/signin"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection>

      <ShowCaseSection title="Signin Page Split Screen">
        <ShowCaseFrame>
          <IframeResizer
            src="http://localhost:3000/examples/signin/split-screen"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection>

      <ShowCaseSection title="Signin Page Split Card">
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

export default SigninPage;
