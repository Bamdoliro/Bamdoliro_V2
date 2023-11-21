import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import bsm from "../../../assets/bsm.svg";

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
    <Container>
      <Font>
        <Title>우리의 바람이 당신에게 닿기를</Title>
        {wind.map((a) => (
          <Box>
            <Textbox>
              <Square>
                <Number>{a.id}번째 바람</Number>
                <Text>{a.wind}</Text>
              </Square>
            </Textbox>
          </Box>
        ))}
      </Font>
    </Container>
  );
};

Wind.defaultProps = {
  Wind: [],
};

const Square = styled.div``;

const Box = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 16px;
`;

const Text = styled.div`
  position: relative;
  top: 35px;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  user-select: none;
  text-align: left;
`;

const Number = styled.div`
  position: relative;
  top: 25px;
  color: var(--grey2, #929292);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  text-align: left;
`;

const Textbox = styled.div`
  position: relative;
  top: 220px;
  left: 100px;
  width: 200px;
  height: 120px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.24);
`;

const Font = styled.div`
  color: var(--white, #fff);
  text-align: center;
  font-family: Pretendard;
`;
const Title = styled.div`
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  top: 110px;
  user-select: none;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bsm});
  background-size: cover;
  background-position: center;
`;

export default Wind;
