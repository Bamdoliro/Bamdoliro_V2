import React, { useRef } from "react";
import * as S from "./style";
import conversation from "../../../assets/culture.svg";
import culture from "../../../assets/culture2.svg";
import grow from "../../../assets/culture3.svg";

const Culture = ({ textNumber, setTextNumber }) => {
  const texts = [
    "주저없는 소통",
    "수평적인 문화 지향",
    "다소 과격한 성장 의지",
  ];
  const imgs = [conversation, culture, grow];
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
        }, 1000);
      }
    }
  };

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
        <S.Font>
          <S.Team>Team Culture</S.Team>
          <S.Bamdoliro>‘밤돌이로’다움이란</S.Bamdoliro>
        </S.Font>
        {textNumber <= 2 ? (
          imgs.map((item, index) => (
            <S.Image
              src={item}
              alt="Image"
              key={index}
              index={index}
              textNumber={textNumber}
            />
          ))
        ) : (
          <S.Image
            src={imgs[2]}
            alt="Image"
            index={2}
            textNumber={textNumber}
            style={{ opacity: 1 }}
          />
        )}
      </S.ContentLayout>
    </S.Layout>
  );
};

export default Culture;
