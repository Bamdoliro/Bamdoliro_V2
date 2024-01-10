import React, { useRef,useState } from "react";
import * as S from './style'

const Introduce = ({onNavigateToNextPage}) => {
  const texts = [
    "🏃끈기있는",
    "🔥꺼지지 않을 열정이 있는",
    "🐯무엇이든 맞설 용기있는",
    "📈끊임없이 성장하는",
    "🧶엉킨 실타래를 푸는",
  ];
  const isScrollDown = useRef(false);
  const [textNumber,setTextNumber] = useState(0);

  const handleWheel = (event) => {
    const scroll = event.deltaY;
    if (scroll > 0) {
      if (!isScrollDown.current && textNumber <= 4) {
        console.log("scrolled");
        setTextNumber(textNumber + 1);
        isScrollDown.current = true;
        setTimeout(() => {
          isScrollDown.current = false;
        }, 1500);
      } else if (textNumber > 4) {
        onNavigateToNextPage("introduce");
      }
    }
  }

  return (
    <S.Layout onWheel={handleWheel}>
      <S.ContentLayout>
        <S.Contents>
        <S.MoveBox textNumber={textNumber}>
          {texts.length > 0 && texts.map((text, index) => (
          <S.Text key={index} index={index} textNumber={textNumber}>
            {text}
          </S.Text>
          ))}
        </S.MoveBox>
        </S.Contents>
        <S.Bamdoliro>밤돌이로</S.Bamdoliro>
      </S.ContentLayout>
    </S.Layout>
  );
};

export default Introduce;