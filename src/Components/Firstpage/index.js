import Main from "./Main/index";
import Circle from "./Circle/index";
//import Header from "./Header/index";
import { styled, createGlobalStyle } from "styled-components";

function FirstPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <StyledCircle />
        <Main />
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #3e3d3f;
`;

const StyledCircle = styled(Circle)`
  position: relative;
  z-index: 1;
`;

/*const StyledHeader = styled(Header)`
  position: relative;
  z-index: 2;
`; */

export default FirstPage;
