import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import Marquee from "react-fast-marquee";

const Wind = () => {
  const [wind, setWind] = useState([]);
  
  useEffect(() => {
    const getWindData = async () => {
      try {
        const res = await axios.get("https://teampage.bamdoliro.com/randomList");
        setWind(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWindData();
  }, []);

  const itemsCount = wind.length;
  const firstItems = Math.ceil(itemsCount / 3);
  const lastItems = wind.length;

  return (
    <S.Container>
      <S.Font>
        <S.Title>우리의 바람이 당신에게 닿기를</S.Title>
        <Marquee speed={80}>
          <S.RollingTop>
            {wind.slice(0, firstItems).map((item) => {
              return (
                <S.Box key={item.id}>
                  <S.Textbox>
                    <S.Number>{item.id}번째 바람</S.Number>
                    <S.Text>{item.wind}</S.Text>
                  </S.Textbox>
                </S.Box>
              );
            })}
          </S.RollingTop>
        </Marquee>
        {/* Second Marquee: Displaying items up to 2/3 */}
        <Marquee speed={40}>
          <S.Rolling>
            {wind.slice(firstItems, firstItems*2).map((item) => {
              return (
                <S.Box key={item.id}>
                  <S.Textbox>
                    <S.Number>{item.id}번째 바람</S.Number>
                    <S.Text>{item.wind}</S.Text>
                  </S.Textbox>
                </S.Box>
              );
            })}
          </S.Rolling>
        </Marquee>
        <Marquee speed={50}>
          <S.Rolling>
            {wind.slice(firstItems*2, lastItems).map((item) => {
              return (
                <S.Box key={item.id}>
                  <S.Textbox>
                    <S.Number>{item.id}번째 바람</S.Number>
                    <S.Text>{item.wind}</S.Text>
                  </S.Textbox>
                </S.Box>
              );
            })}
          </S.Rolling>
        </Marquee>
      </S.Font>
    </S.Container>
  );
};

Wind.defaultProps = {
  Wind: [],
};

export default Wind;
