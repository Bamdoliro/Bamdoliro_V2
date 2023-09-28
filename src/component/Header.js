import styled from "styled-components";
import React from "react";

const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: white;
  width: 1240px;
  height: 54px;

  ul {
    margin-right: -10px;
  }
`;

function Header(props) {
  return (
    <div>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "./logo.svg"}
        alt="logo"
      ></img>
      <Menu>
        <ul>팀 소개</ul>
        <ul>팀 연혁</ul>
        <ul>멤버 소개</ul>
        <ul>팀 문화</ul>
      </Menu>
    </div>
  );
}

export default Header;
