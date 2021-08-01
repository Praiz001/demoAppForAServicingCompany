import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import {Marginer} from "../../components/marginer";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistImg from "../../images/Work only with the best.png";


const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -110px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 34em;

    img{
      width:100%;
      height:100%;
    }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items:flex-start;
  flex-direction: column;
`;

const SloganText = styled.h3`
    margin: 0;   
    line-height: 1.3;
    color: #fff;
    font-weight: 400;
    font-size: 35px;
`;


export function TopSection(props) {
  const {children} = props;
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo logoSize={65} textSize={55} />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Find the right specialist</SloganText>
            <SloganText>For the right job</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button>Join Now</Button>
          </LogoContainer>  
          <StandoutImage>
            <img src={TheBestSpecialistImg} alt="best in the field"/>
          </StandoutImage>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}