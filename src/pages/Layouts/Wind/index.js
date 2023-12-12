import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import Marquee from "react-fast-marquee";

const Wind = () => {
  const [wind, setWind] = useState([]);
  useEffect(() => {
    const getWindData = async () => {
      try {
        const res = await axios.get(
          "https://teampage.bamdoliro.com/randomList"
        );
        setWind(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWindData();
  }, []);

  return (
    <S.Container>
      <S.Font>
        <S.Title>우리의 바람이 당신에게 닿기를</S.Title>
        <Marquee>
          {/*흐르는 텍스트 효과*/}
          <S.Rolling>
            {" "}
            {/*텍스트 박스들 들어가있는 공간*/}
            {wind.map((item) => {
              return (
                <S.Box>
                  <S.Textbox>
                    <S.Number>{item.id}번째 바람</S.Number>
                    <S.Text>{item.wind}</S.Text>
                  </S.Textbox>
                </S.Box>
              )
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
