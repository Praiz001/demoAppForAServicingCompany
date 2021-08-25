import React from "react";
import styled from "styled-components";

import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { Navbar} from "../../components/navbar";
import { deviceSize } from "../../components/responsive";
import { Marginer } from "../../components/marginer";
import { Services } from "./services";


const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  paddig: 1em;
`;


export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Services />
        </ContentContainer>  
      </InnerPageContainer>
    </PageContainer>
  );
}


//json-server --watch db.json --static ./src/images/thumbnails/ --port 9000