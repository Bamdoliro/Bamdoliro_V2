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

  const wheelDown = useRef(false);
  const [wheelMove, setWheelMove] = useState(0)

  const handleWheel = (event) => {
    if (wheelDown.current || wheelMove >= 4) {
      return;
    }
    const scroll = event.deltaY;
    if (scroll > 0) {
      console.log("Scrolling down");
      setWheelMove(wheelMove + 1);
      wheelDown.current = true;

      setTimeout(() => {
        wheelDown.current = false;
      }, 1500);
    }
  };
  
  return (
    <Layout onWheel={handleWheel}>
      <ContentLayout>
      <Contents wheelMove={wheelMove}>
          {wheelMove === 0 ? (<MainText>{texts[0]}</MainText>) : (<SubText>{texts[0]}</SubText>)}
          {wheelMove === 1 ? (<MainText>{texts[1]}</MainText>) : (<SubText>{texts[1]}</SubText>)}
          {wheelMove === 2 ? (<MainText>{texts[2]}</MainText>) : (<SubText>{texts[2]}</SubText>)}
          {wheelMove === 3 ? (<MainText>{texts[3]}</MainText>) : (<SubText>{texts[3]}</SubText>)}
          {wheelMove === 4 ? (<MainText>{texts[4]}</MainText>) : (<SubText>{texts[4]}</SubText>)}
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
  transition: transform 0.5s ease;
  transform: translateY(${(props) => -props.wheelMove * 71}px);
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 630px;
  gap: 34px;
  overflow: hidden;
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
const SubText = styled.h2`
  color: var(--grey2, #929292);
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
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