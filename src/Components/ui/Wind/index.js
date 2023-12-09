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
          "https://port-0-bamdoliro-ov-jvpb2alnepf5zj.sel5.cloudtype.app/randomList"
        );
        const sort = res.data.sort((a, b) => a.id - b.id); //데이터를 순서대로 정렬
        setWind(sort);
        console.log(sort);
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
            {wind.map((a) => (
              <S.Box>
                <S.Textbox>
                  <S.Number>{a.id}번째 바람</S.Number>
                  <S.Text>{a.wind}</S.Text>
                </S.Textbox>
              </S.Box>
            ))}
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
