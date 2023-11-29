import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";

const Wind = () => {
  const [wind, setWind] = useState([]);
  useEffect(() => {
    const getWindData = async () => {
      try {
        const res = await axios.get(
          "https://port-0-bamdoliro-ov-jvpb2alnepf5zj.sel5.cloudtype.app/randomList"
        );
        const sort = res.data.sort((a, b) => a.id - b.id);
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
        <S.Div>
          {wind.map((a) => (
            <S.Box>
              <S.Textbox>
                <S.Square>
                  <S.Number>{a.id}번째 바람</S.Number>
                  <S.Text>{a.wind}</S.Text>
                </S.Square>
              </S.Textbox>
            </S.Box>
          ))}
        </S.Div>
      </S.Font>
    </S.Container>
  );
};

Wind.defaultProps = {
  Wind: [],
};

export default Wind;
