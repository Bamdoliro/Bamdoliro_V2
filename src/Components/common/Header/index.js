import styled from "styled-components";
import React from "react";

function Header(props) {
  return (
    <HeaderContainer activeSection={props.activeSection}>
      <Menu>
        <Logo
          src={
            props.activeSection === "introduce" ||
            props.activeSection === "projects"
              ? process.env.PUBLIC_URL + "/Logo1.svg"
              : process.env.PUBLIC_URL + "/logo.svg"
          }
          alt="logo"
        />
        <MenuItem
          className={
            props.activeSection === "introduce" ||
            props.activeSection === "projects"
              ? "active"
              : ""
          }
        >
          팀 소개
        </MenuItem>
        <MenuItem
          className={
            props.activeSection === "introduce" ||
            props.activeSection === "projects"
              ? "active"
              : ""
          }
        >
          팀 문화
        </MenuItem>
        <MenuItem
          className={
            props.activeSection === "introduce" ||
            props.activeSection === "projects"
              ? "active"
              : ""
          }
        >
          프로젝트
        </MenuItem>
        <MenuItem
          className={
            props.activeSection === "introduce" ||
            props.activeSection === "projects"
              ? "active"
              : ""
          }
        >
          팀 연혁
        </MenuItem>
        <MenuItem
          className={
            props.activeSection === "introduce" ||
            props.activeSection === "projects"
              ? "active"
              : ""
          }
        >
          멤버 소개
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${(props) =>
    props.activeSection === "introduce" || props.activeSection === "projects"
      ? "rgba(255, 255, 255, 0.06)"
      : "rgba(62, 61, 63, 0.30)"};
  border: 1px solid rgba(62, 61, 63, 0.3);
  backdrop-filter: blur(5px);
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  width: 100vw;
  height: 60px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 170px;
`;

const MenuItem = styled.li`
  list-style-type: none;
  margin-right: 30px;
  cursor: pointer;
  position: relative;

  color: ${(props) => (props.className === "active" ? "black" : "white")};

  &:hover::before {
    content: "";
    position: absolute;
    top: -8px;
    left: -12px;
    right: -12px;
    bottom: -8px;
    background: rgba(238, 238, 238, 0.3);
    z-index: -1;
    border-radius: 6px;
  }
`;

const Logo = styled.img`
  width: 170px;
  height: 20px;
  margin-right: 570px;
`;

export default Header;
