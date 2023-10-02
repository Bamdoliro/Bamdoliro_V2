import styled from "styled-components";
import React from "react";

function Header(props) {
  return (
    <HeaderContainer>
      <Menu>
        <Logo src={process.env.PUBLIC_URL + "./logo.svg"} alt="logo" />
        <Team>팀 소개</Team>
        <li>팀 연혁</li>
        <li>멤버 소개</li>
        <li>팀 문화</li>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;

  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(62, 61, 63, 0.01);
  backdrop-filter: blur(5px);
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: white;
  width: 100vw;
  height: 30px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 300px;

  li {
    list-style-type: none;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Team = styled.li`
  border-radius: 4px;
  background: rgba(238, 238, 238, 0.3);
  padding: 8px 12px;
  line-height: initial;
`;

const Logo = styled.img`
  margin-right: 600px;
`;

export default Header;
