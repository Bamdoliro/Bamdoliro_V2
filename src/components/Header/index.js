import * as S from "./style";
import React from "react";
import { a } from "react-router-dom";
import black_logo from "../../assets/black_logo.svg";
import white_logo from "../../assets/white_logo.svg";

const Header = (props) => {
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
          alt="logo" />
        <S.MenuItem>
          <a href="/#introduce">메뉴1</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="/#culture">메뉴1</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="/#projects">메뉴1</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="/#history">메뉴1</a>
        </S.MenuItem>
        <S.MenuItem>
          <a href="/#member">메뉴1</a>
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  );
};

export default Header;
