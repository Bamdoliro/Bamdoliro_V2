import styled from "styled-components";
import React from "react";
import black_logo from "../../../assets/black_logo.svg";
import white_logo from "../../../assets/white_logo.svg";

function Header(props) {
  const Items = ["팀 소개", "팀 문화", "프로젝트", "팀 연혁", "멤버 소개"];

  return (
    <HeaderContainer activeSection={props.activeSection}>
      <Menu>
        <Logo
          src={
            props.activeSection === "introduce" ||
            props.activeSection === "culture" ||
            props.activeSection === "projects" ||
            props.activeSection === "history" ||
            props.activeSection === "member"
              ? black_logo
              : white_logo
          }
          alt="logo"
        />
        {Items.map((item, index) => (
          <MenuItem
            key={index}
            className={
              props.activeSection === "introduce" ||
              props.activeSection === "culture" ||
              props.activeSection === "projects" ||
              props.activeSection === "history" ||
              props.activeSection === "member"
                ? "active"
                : ""
            }
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${(props) =>
    props.activeSection === "introduce" ||
    props.activeSection === "culture" ||
    props.activeSection === "projects" ||
    props.activeSection === "history" ||
    props.activeSection === "member"
      ? "rgba(255, 255, 255, 0.06)"
      : "rgba(62, 61, 63, 0.30)"};
  border-bottom: 1px solid rgba(62, 61, 63, 0.3);
  backdrop-filter: blur(5px);
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  width: 100vw;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
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
    background: rgba(238, 238, 238, 0.6);
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
