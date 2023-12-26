import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 375px;
  flex-shrink: 0;
  background: var(--grey3, #3e3d3f);
  box-shadow: 0px 4px 4px 0px rgba(255, 253, 253, 0.1);
  backdrop-filter: blur(2px);
`;

export const Icon = styled.img`
  position: fixed;
  left: 161px;
  top: 83px;
  width: 248px;
  height: 30px;
  flex-shrink: 0;
`;

export const Github = styled.img`
  position: fixed;
  left: 1175px;
  top: 83px;
  cursor: pointer;
`;

export const Insta = styled.img`
  position: fixed;
  left: 1240px;
  top: 83px;
  cursor: pointer;
`;

export const Font = styled.div`
  position: fixed;
  left: 161px;
  color: var(--grey2, #929292);
  /* small text */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Email = styled.div`
  position: fixed;
  top: 137.55px;
`;

export const Reserved = styled.div`
  position: fixed;
  top: 310px;
`;
