import {styled, createGlobalStyle} from "styled-components";
import Introduce from "./Components/Introduce";

function App() {
  return (
    <>
      <GlobalStyle />
      <Introduce />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`

export default App;
