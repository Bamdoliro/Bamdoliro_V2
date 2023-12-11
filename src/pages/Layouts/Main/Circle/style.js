import styled from "styled-components";

export const Pointer = styled.div`
  position: fixed;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: white;
  filter: blur(20px);
  transition-property: left top;
  transition-duration: 0.2s;
  transition: 0.2s ease-out;
`;
