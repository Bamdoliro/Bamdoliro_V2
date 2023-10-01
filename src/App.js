import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "./component/Header/index";
import Main from "./component/Main/index";
import Pointer from "./component/Pointer/index";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Pointer />
        <Main />
      </Container>
    </>
  );
}

export default App;
