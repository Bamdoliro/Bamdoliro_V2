import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "./component/Header/index";
import Main from "./component/Main/index";
import Circle from "./component/Circle/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Circle />
        <Main />
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative; 
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

export default App;
