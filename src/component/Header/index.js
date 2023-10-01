import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.div`
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
  margin-left: 180px;

  li {
    list-style-type: none;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  margin-right: 700px;
`;

function Header(props) {
  return (
    <HeaderContainer>
      <Menu>
        <Logo src={process.env.PUBLIC_URL + "./logo.svg"} alt="logo" />
        <li>팀 소개</li>
        <li>팀 연혁</li>
        <li>멤버 소개</li>
        <li>팀 문화</li>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
