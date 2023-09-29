import {styled, createGlobalStyle} from "styled-components";
import Introduce from "./Components/Introduce";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`

export default App;
