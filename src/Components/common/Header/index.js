import styled from "styled-components";
import React from "react";

function Header(props) {
  return (
    <HeaderContainer activeSection={props.activeSection}>
      <Menu>
        <Logo
          src={
            props.activeSection === "introduce"
              ? process.env.PUBLIC_URL + "./Logo1.svg"
              : process.env.PUBLIC_URL + "./logo.svg"
          }
          alt="logo"
        />
        <li className={props.activeSection === "introduce" ? "active" : ""}>
          팀 소개
        </li>
        <li className={props.activeSection === "introduce" ? "active" : ""}>
          팀 문화
        </li>
        <li className={props.activeSection === "introduce" ? "active" : ""}>
          프로젝트
        </li>
        <li className={props.activeSection === "introduce" ? "active" : ""}>
          팀 연혁
        </li>
        <li className={props.activeSection === "introduce" ? "active" : ""}>
          멤버 소개
        </li>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;

  background-color: ${(props) =>
    props.activeSection === "introduce" ? "white" : "rgba(62, 61, 63, 0.3)"};

  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(5px);
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: white;
  width: 100vw;
  height: 60px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 120px;

  li {
    list-style-type: none;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      border-radius: 4px;
      background: rgba(238, 238, 238, 0.3);
      padding: 8px 12px;
      line-height: initial;
    }

    &.active {
      color: black;
    }
  }
`;

const Logo = styled.img`
  width: 170px;
  height: 20px;
  margin-right: 600px;
`;

export default Header;
