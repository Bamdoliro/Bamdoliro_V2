import styled from "styled-components";
import React from "react";

const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: white;
  width: 1240px;
  height: 30px;
  margin-left: 950px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  margin-left: -520px; // 로고와 텍스트 사이의 거리 조정
  margin-right: 600px; // 로고와 텍스트 사이의 거리 조정
`;

function Header(props) {
  return (
    <div>
      <Menu>
        <Logo src={process.env.PUBLIC_URL + "./logo.svg"} alt="logo" />
        <ul>팀 소개</ul>
        <ul>팀 연혁</ul>
        <ul>멤버 소개</ul>
        <ul>팀 문화</ul>
      </Menu>
    </div>
  );
}

export default Header;
