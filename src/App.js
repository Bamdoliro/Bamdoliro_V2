import React from "react";
import { createGlobalStyle } from "styled-components";
import Introduce from "./Components/Introduce";
import FirstPage from "./Components/Firstpage";
import Header from "./Components/Header/index";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <>
      <Header />
      <ReactFullpage
        anchors={["main", "introduce"]}
        render={() => {
          return (
            <>
              <GlobalStyle />

              <div className="section">
                <FirstPage />
              </div>
              <div className="section">
                <Introduce />
              </div>
            </>
          );
        }}
      />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  .fp-watermark {
    display: none;
  }
`;

export default App;
