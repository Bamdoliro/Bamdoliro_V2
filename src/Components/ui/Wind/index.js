import React from "react";
import styled from "styled-components";
import bsm from "../../../assets/bsm.svg";

const Wind = () => {
  return (
    <Container>
      <Font>
        <Title>우리의 바람이 당신에게 닿기를</Title>
        <Textbox>
          <Number>N번째 바람</Number>
          <Text>잊지마 내가 두고 온 방과후</Text>
        </Textbox>
      </Font>
    </Container>
  );
};

const Text = styled.div`
  position: relative;
  top: 35px;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  user-select: none;
`;

const Number = styled.div`
  position: relative;
  top: 25px;
  right: 95px;
  color: var(--grey2, #929292);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;
`;

const Textbox = styled.div`
  position: relative;
  top: 250px;
  left: 100px;
  width: 325px;
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
  top: 120px;
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
