import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistImg from "../../images/Work only with the best.png";


const TopSectionContainer = styled.div`
  width: 100%;
  height: 600px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -110px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: coloumn;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width; 37em;
  height: 32em;

    img{
      width:100%
      height:100%
    }
`;



export function TopSection(props) {
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <StandoutImage>
          <img src={TheBestSpecialistImg} alt="best in the field"/>
        </StandoutImage>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}