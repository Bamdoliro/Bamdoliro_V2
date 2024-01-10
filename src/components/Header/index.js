import * as S from "./style";
import React from "react";
import black_logo from "../../assets/black_logo.svg";
import white_logo from "../../assets/white_logo.svg";
import header from "../../datas/header.json";

const Header = ({activeSection, onHeaderClick}) => {
  return (
    <S.HeaderContainer activeSection={activeSection}>
      <S.Menu>
        <S.Logo
          src={
            activeSection === "introduce" ||
            activeSection === "culture" ||
            activeSection === "projects" ||
            activeSection === "history" ||
            activeSection === "member"
              ? black_logo
              : white_logo
          }
          alt="logo"
        />
        {header.map((item) => (
          <a href={item.to} key={item.id} onClick={onHeaderClick}>
            <S.MenuItem
              className={
                activeSection === "introduce" ||
                activeSection === "culture" ||
                activeSection === "projects" ||
                activeSection === "history" ||
                activeSection === "member"
                  ? "active"
                  : ""
              }
            >
              {item.title}
            </S.MenuItem>
          </a>
        ))}
      </S.Menu>
    </S.HeaderContainer>
  );
};

export default Header;
