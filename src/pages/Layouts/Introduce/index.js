import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import "swiper/css";
import { useSwiper } from "swiper/react";

const Introduce = ({ isActive }) => {
  const [textNumber, setTextNumber] = useState(0);
  const texts = [
    "🏃끈기있는",
    "🔥꺼지지 않을 열정이 있는",
    "🐯무엇이든 맞설 용기있는",
    "📈끊임없이 성장하는",
    "🧶엉킨 실타래를 푸는",
  ];

  const swiper = useSwiper();

  const isScrollDown = useRef(false);

  const handleWheel = (event) => {
    const scroll = event.deltaY;
    if (scroll > 0) {
      if (!isScrollDown.current && textNumber <= 4) {
        console.log("scrolled");
        setTextNumber(textNumber + 1);
        isScrollDown.current = true;
        setTimeout(() => {
          isScrollDown.current = false;
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (isActive) {
      swiper.disable();
      if (textNumber >= 4) {
        swiper.enable();
      }
    }
  }, [isActive, textNumber, swiper]);

  return (
    <S.Layout onWheel={handleWheel}>
      <S.ContentLayout>
        <S.Contents>
          <S.MoveBox textNumber={textNumber}>
            {texts.map((text, index) => (
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
