import { styled } from "styled-components";
import bsm from "../../../assets/bsm.svg";

export const Rolling = styled.div`
  width: auto;
  height: 1800px;
  text-align: left;
`;

export const Box = styled.div`
  display: inline-block;
  padding: 10px;
`;
export const Text = styled.div`
  position: relative;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  user-select: none;
  text-align: left;
  padding-top: 10px;
`;

export const Number = styled.div`
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

export const Textbox = styled.div`
  position: relative;
  top: 150px;
  width: auto;
  height: auto;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.24);
  padding-top: 29px;
  padding-bottom: 29px;
  padding-left: 33px;
  padding-right: 33px;
`;

export const Font = styled.div`
  color: var(--white, #fff);
  text-align: center;
  font-family: Pretendard;
`;
export const Title = styled.div`
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  top: 110px;
  user-select: none;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bsm});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;
