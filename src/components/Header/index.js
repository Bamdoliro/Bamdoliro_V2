import * as S from "./style";
import React from "react";
import { Link } from "react-router-dom";
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
          alt="logo"
        />
        <S.MenuItem>
          <Link to="/#introduce">메뉴1</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/#culture">메뉴1</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/#projects">메뉴1</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/#history">메뉴1</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/#member">메뉴1</Link>
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  );
};

export default Header;
