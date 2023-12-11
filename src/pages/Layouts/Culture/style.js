import styled from "styled-components";

export const MoveBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  transition: transform 0.5s ease;
  transform: translateY(
    ${(props) =>
      props.textNumber <= 2 ? `-${props.textNumber * 71}px` : "-142px"}
  );
`;

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 51px;
`;

export const Contents = styled.div`
  transition: transform 0.5s ease;
  height: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  top: 80px;
  right: 434px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 105px;
    z-index: 1;
  }

  &:before {
    top: 0;
    background: linear-gradient(
      to top,
      transparent,
      rgba(255, 255, 255, 1) 50%
    );
  }

  &:after {
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 1) 40%
    );
  }
`;

export const Text = styled.h1`
  color: ${(props) =>
    props.index === Math.min(props.textNumber, 2)
      ? "var(--grey3, #3E3D3F)"
      : "var(--grey2, #929292)"};
  text-align: center;
  font-size: ${(props) =>
    props.index === Math.min(props.textNumber, 2) ? "48px" : "28px"};
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  user-select: none;
`;

export const Font = styled.div`
  position: absolute;
  left: 162px;
  top: 170px;
  user-select: none;
`;
export const Bamdoliro = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
export const Team = styled.div`
  color: var(--navy, #6699ed);
  font-size: 36px;
  font-weight: 500;
`;
export const Image = styled.img`
  width: 429px;
  height: 592px;
  position: absolute;
  left: 850px;
  top: 100px;
  opacity: ${(props) => (props.index === props.textNumber ? 1 : 0)};
  transition: opacity 0.5s ease;
`;
