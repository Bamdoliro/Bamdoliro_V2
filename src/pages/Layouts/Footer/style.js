import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 37vh;
  flex-shrink: 0;
  background: var(--grey3, #3e3d3f);
  box-shadow: 0px 4px 4px 0px rgba(255, 253, 253, 0.1);
  backdrop-filter: blur(2px);
`;

export const Icon = styled.img`
  position: absolute;
  left: 161px;
  top: 75px;
  width: 248px;
  height: 30px;
  flex-shrink: 0;
`;

export const Github = styled.img`
  position: absolute;
  left: 82%;
  top: 75px;
  cursor: pointer;
`;

export const Insta = styled.img`
  position: absolute;
  left: 85.5%;
  top: 75px;
  cursor: pointer;
`;

export const Font = styled.div`
  position: absolute;
  left: 161px;
  color: var(--grey2, #929292);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Email = styled.div`
  position: relative;
  top: 137.55px;
  cursor : default;
`;

export const Reserved = styled.div`
  position: relative;
  top: 275px;
  cursor : default;
`;
