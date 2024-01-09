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
          <S.Item href="/#introduce">팀 소개</S.Item>
        </S.MenuItem>
        <S.MenuItem>
          <S.Item href="/#culture">팀 문화</S.Item>
        </S.MenuItem>
        <S.MenuItem>
          <S.Item href="/#projects">프로젝트</S.Item>
        </S.MenuItem>
        <S.MenuItem>
          <S.Item href="/#history">팀 연혁</S.Item>
        </S.MenuItem>
        <S.MenuItem>
          <S.Item href="/#member">멤버 소개</S.Item>
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  );
};

export default Header;
