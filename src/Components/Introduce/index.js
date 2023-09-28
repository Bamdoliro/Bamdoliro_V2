import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Introduce = () => {
  const [texts,setTexts] = useState([
    '🏃끈기있는',
    '🔥꺼지지 않을 열정이 있는',
    '🐯무엇이든 맞설 용기있는',
    '📈끊임없이 성장하는',
    '🧶엉킨 실타래를 푸는'
  ])

  const hasWheelEventHandled = useRef(false);
  const [wheelMove, setWheelMove] = useState(0)

  const handleWheel = () => {
    if (hasWheelEventHandled.current || wheelMove >= 4) {
      return;
    }
    console.log("휠 움직임");
    setWheelMove(wheelMove + 1)
    hasWheelEventHandled.current = true;
    setTimeout(() => {
      hasWheelEventHandled.current = false;
    }, 1500);
  };

  return (
    <Layout onWheel={handleWheel}>
      <ContentLayout>
        <Contents>
          <MainText>
          {texts[wheelMove]}
          </MainText>
        </Contents>
        <Bamdoliro>
          밤돌이로
        </Bamdoliro>
      </ContentLayout>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 51px;
`
const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
`
const Bamdoliro = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
// const SubText = styled.h2`
//   color: #363636;
//   text-align: center;
//   /* H2 */
//   font-family: Pretendard;
//   font-size: 28px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
// `
const MainText = styled.h1`
  color: var(--navy, #6699ED);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 10px;
  padding-right: 10px;
`

export default Introduce;