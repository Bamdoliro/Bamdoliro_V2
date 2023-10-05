import React from "react";
import { createGlobalStyle } from "styled-components";
import FirstPage from "./Components/ui/Firstpage";
import Header from "./Components/common/Header"
import ReactFullpage from "@fullpage/react-fullpage";
import Introduce from "./Components/ui/Introduce";
import Projects from "./Components/ui/Projects";

function App() {
  return (
    <>
      <Header />
      <ReactFullpage
        anchors={["main", "introduce","projects"]}
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
              <div className="section">
                <Projects />
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
