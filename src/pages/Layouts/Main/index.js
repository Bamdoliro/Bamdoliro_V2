import Content from "./Content/index";
import Circle from "./Circle/index";
import { styled } from "styled-components";

function Main() {
  return (
    <>
      <Container>
        <StyledCircle />
        <Content />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #191919;
  cursor: none;
`;

const StyledCircle = styled(Circle)`
  position: relative;
  z-index: 1;
`;

export default Main;
