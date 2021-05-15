import React from "react";
import { ShowCaseContainer, ShowCaseSection } from "@/pages/ShowCase/ShowCase";
import IframeResizer from "iframe-resizer-react";
import { ShowCaseFrame } from "../ShowCase/ShowCase";

const SigninPage = () => {
  return (
    <ShowCaseContainer>
      <ShowCaseSection title="Card Style" subtitle="With illustration background for any common login page / register page">
        <ShowCaseFrame>
          <IframeResizer
            src="/#/examples/signin?iframe=true"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection>

      {/* <ShowCaseSection title="Split Screen" subtitle="Show content in one side with carousel style, your can swap a side you want">
        <ShowCaseFrame>
          <IframeResizer
            src="/#/examples/signin/split-screen"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection> */}

      {/* <ShowCaseSection title="Split Card" subtitle="Same as split screen plus card style">
        <ShowCaseFrame>
          <IframeResizer
            src="/#/examples/signin/split-card"
            style={{ width: "1px", minWidth: "100%" }}
          />
        </ShowCaseFrame>
      </ShowCaseSection> */}
    </ShowCaseContainer>
  );
};

export default SigninPage;
