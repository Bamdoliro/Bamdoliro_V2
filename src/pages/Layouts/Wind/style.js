import { styled } from "styled-components";
import bsm from "../../../assets/bsm.svg";

export const RollingTop = styled.div`
  width: auto;
  height: 140px;
  text-align: left;
  display: flex;
  margin-top: 150px;
`;
export const Rolling = styled.div`
  width: auto;
  height: 140px;
  text-align: left;
  display: flex;
`;

export const Box = styled.div`
  display: inline-block;
  padding: 10px;
`;
export const Text = styled.div`
  position: relative;
  font-size: 25px;
  font-weight: 700;
  user-select: none;
  text-align: left;
  padding-top: 10px;
`;

export const Number = styled.div`
  position: relative;
  color: var(--grey2, #929292);
  font-size: 21px;
  font-weight: 500;
  user-select: none;
  text-align: left;
`;

export const Textbox = styled.div`
  position: relative;
  width: auto;
  height: 60px;
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
  font-weight: 700;
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
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WishPage = styled.div`
  height: 100vh;
`;
