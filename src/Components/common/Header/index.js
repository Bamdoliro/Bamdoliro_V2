import * as S from "./style";
import React from "react";
import black_logo from "../../../assets/black_logo.svg";
import white_logo from "../../../assets/white_logo.svg";

function Header(props) {
  const Items = ["팀 소개", "팀 문화", "프로젝트", "팀 연혁", "멤버 소개"];

  return (
    <S.HeaderContainer activeSection={props.activeSection}>
      <S.Menu>
        <S.Logo
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
          <S.MenuItem
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
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.HeaderContainer>
  );
}

export default Header;
