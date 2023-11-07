import styled from "styled-components";

export const MoveBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  transition: transform 0.5s ease;
  transform: translateY(${(props) => -props.textNumber * 71}px);
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
  height: 630px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 255px;
    z-index: 1;
  }

  &:before {
    top: 0;
    background: linear-gradient(
      to top,
      transparent,
      rgba(255, 255, 255, 1) 40%
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
    props.index === props.textNumber
      ? "var(--navy, #6699ED)"
      : "var(--grey2, #929292)"};
  text-align: center;
  font-size: ${(props) => (props.index === props.textNumber ? "48px" : "28px")};
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Bamdoliro = styled.p`
  color: var(--grey3, #3e3d3f);
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;