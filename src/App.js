import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "./component/Header";
import Main from "./component/Main";
import Pointer from "./component/Pointer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3e3d3f;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Pointer />
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App;
