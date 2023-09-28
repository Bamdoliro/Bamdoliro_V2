import React from "react";

function Header(props) {
  return (
    <div>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "./logo.svg"}
        alt="logo"
      ></img>
      <div className="menu">
        <ul>
          <li>팀 소개</li>
          <li>팀 연혁</li>
          <li>멤버 소개</li>
          <li>팀 문화</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
