import React, { useState } from "react";
import styled from "styled-components";

const Culture = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Font>
        <Team>Team Culture</Team>
        <Bamdoliro>‘밤돌이로’다움이란</Bamdoliro>
      </Font>
      <Test>수평적인 문화 지향</Test>
      <Logo
        src={process.env.PUBLIC_URL + "/culture.svg"}
        alt="logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && <HoveredText>가나다라</HoveredText>}
    </div>
  );
};

const Font = styled.div`
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
  position: absolute;
  left: 162px;
  top: 193px;
`;
const Bamdoliro = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
const Team = styled.div`
  color: var(--navy, #6699ed);
  font-size: 36px;
  font-weight: 500;
`;

const Test = styled.div`
  color: var(--grey3, #3e3d3f);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  top: 512px;
  left: 162px;
`;

const Logo = styled.img`
  width: 429px;
  height: 592px;
  position: absolute;
  left: 850px;
  top: 100px;
`;

const HoveredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Pretendard;
  font-size: 24px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 5px;
`;

export default Culture;
