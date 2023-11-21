import React, { useRef, useState } from "react";
import styled from "styled-components";
import conversation from "../../../assets/culture.svg";
import culture from "../../../assets/culture2.svg";
import grow from "../../../assets/culture3.svg";

const Culture = ({onNavigateToNextPage,textNumber,setTextNumber}) => {
  const texts = [
    "주저없는 소통",
    "수평적인 문화 지향",
    "다소 과격한 성장 의지",
  ];
  const imgs = [
    conversation,
    culture,
    grow
  ]
  const isScrollDown = useRef(false);

  const handleWheel = (event) => {
    const scroll = event.deltaY;
    if (scroll > 0) {
      if (!isScrollDown.current && textNumber <= 2) {
        console.log("scrolled");
        setTextNumber(textNumber + 1);
        isScrollDown.current = true;
        setTimeout(() => {
          isScrollDown.current = false;
        }, 1500);
      } else if (textNumber > 2) {
        onNavigateToNextPage("culture");
      }
    }
  };
  
  

  return (
    <Layout onWheel={handleWheel}>
      <ContentLayout>
        <Contents>
          <MoveBox textNumber={textNumber}>
            {texts.map((text, index) => (
              <Text key={index} index={index} textNumber={textNumber}>
                {text}
              </Text>
            ))}
          </MoveBox>
        </Contents>
        <Font>
          <Team>Team Culture</Team>
          <Bamdoliro>‘밤돌이로’다움이란</Bamdoliro>
        </Font>
        {
          textNumber <= 2 ? (
            imgs.map((item, index) => (
              <Image
                src={item}
                alt="Image"
                key={index}
                index={index}
                textNumber={textNumber}
              />
            ))
          ) : (
            <Image
              src={imgs[2]}
              alt="Image"
              index={2}
              textNumber={textNumber}
              style={{ opacity: 1 }}
            />
          )
        }
      </ContentLayout>
    </Layout>
  );
};

const MoveBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  transition: transform 0.5s ease;
  transform: translateY(${(props) => (props.textNumber <= 2 ? `-${props.textNumber * 71}px` : '-142px')});
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 51px;
`;

const Contents = styled.div`
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

const Text = styled.h1`
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

const Font = styled.div`
  position: absolute;
  left: 162px;
  top: 170px;
  user-select: none;
`;
const Bamdoliro = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
const Team = styled.div`
  color: var(--navy, #6699ed);
  font-size: 36px;
  font-weight: 500;
`;
const Image = styled.img`
  width: 429px;
  height: 592px;
  position: absolute;
  left: 850px;
  top: 100px;
  opacity: ${(props) => (props.index === props.textNumber ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export default Culture;
