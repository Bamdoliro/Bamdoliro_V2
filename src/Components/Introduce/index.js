import React, { useRef, useState } from "react";
import styled from "styled-components";

const Introduce = () => {
  const texts = [
    '🏃끈기있는',
    '🔥꺼지지 않을 열정이 있는',
    '🐯무엇이든 맞설 용기있는',
    '📈끊임없이 성장하는',
    '🧶엉킨 실타래를 푸는',
  ];
  const isScrollDown = useRef(false);
  const [textNumber, setTextNumber] = useState(0);

  const handleWheel = (event) => {
    if (isScrollDown.current || textNumber >= 4) {
      return;
    }
    const scroll = event.deltaY
    if (scroll > 0) {
      console.log('스크롤됨')
      setTextNumber(textNumber + 1)
      isScrollDown.current = true
      setTimeout(() => {
        isScrollDown.current = false
      }, 1500);
    }
  }

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
        <Bamdoliro>밤돌이로</Bamdoliro>
      </ContentLayout>
    </Layout>
  );
};

const MoveBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  transition: transform 0.5s ease;
  transform: translateY(${(props) => -props.textNumber * 71}px);
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

const Text = styled.h1`
  color: ${(props) => (props.index === props.textNumber ? 'var(--navy, #6699ED)' : 'var(--grey2, #929292)')};
  text-align: center;
  font-family: Pretendard;
  font-size: ${(props) => (props.index === props.textNumber ? "48px" : "28px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 10px;
  padding-right: 10px;
`;

const Bamdoliro = styled.p`
  color: var(--grey3, #3e3d3f);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default Introduce;
