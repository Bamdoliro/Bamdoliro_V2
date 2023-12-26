import React from "react";
import * as S from "./style";
import logo from "../../../assets/FooterLogo.svg";
import github from "../../../assets/github.svg";
import insta from "../../../assets/insta.svg";

const Footer = () => {
  return (
    <div>
      <S.Container>
        <S.Icon src={logo} />
        <S.Github
          src={github}
          onClick={() => window.open("https://github.com/Bamdoliro")}
        />
        <S.Insta
          src={insta}
          onClick={() =>
            window.open(
              "https://www.instagram.com/bamdoliro?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
            )
          }
        />
        <S.Font>
          <S.Email>Email | bamdoliro@gmail.com</S.Email>
          <S.Reserved>© 2023. Bamdoliro. All rights reserved.</S.Reserved>
        </S.Font>
      </S.Container>
    </div>
  );
};

export default Footer;
