import React from "react";
import * as S from "./style";
import black_logo from "../../assets/black_logo.svg";
import white_logo from "../../assets/white_logo.svg";
import header from "../../datas/header.json";

const Header = ({ activeSection }) => {
  return (
    <S.HeaderContainer>
      <S.Menu>
        <S.Logo
          src={
            [
              "introduce",
              "culture",
              "projects",
              "histories",
              "member",
            ].includes(activeSection)
              ? black_logo
              : white_logo
          }
          alt="logo"
        />
        {header.map((item) => (
          <S.Url href={`#${item.to}`} key={item.id}>
            <S.MenuItem className={activeSection === item.to ? "active" : ""}>
              {item.title}
            </S.MenuItem>
          </S.Url>
        ))}
      </S.Menu>
    </S.HeaderContainer>
  );
};

export default Header;
