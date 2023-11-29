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
        <Div>
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
        </Div>
      </Font>
    </Container>
  );
};

Wind.defaultProps = {
  Wind: [],
};

const Div = styled.div`
  width: 3000px;
  height: 1800px;
`;

const Box = styled.div`
  display: inline-block;
  justify-content: flex-start;
  padding: 10px;
`;

const Square = styled.div`
  padding-top: 29px;
  padding-bottom: 29px;
  padding-left: 33px;
  padding-right: 33px;
`;

const Text = styled.div`
  position: relative;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  user-select: none;
  text-align: left;
  padding-top: 10px;
`;

const Number = styled.div`
  position: relative;
  color: var(--grey2, #929292);
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  text-align: left;
`;

const Textbox = styled.div`
  position: relative;
  top: 180px;
  left: 100px;
  width: auto;
  height: auto;
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
  overflow: hidden;
`;

export default Wind;
