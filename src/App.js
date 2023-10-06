import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Introduce from "./Components/Introduce";
import Main from "./Components/Main";
import Header from "./Components/Header";
import ReactFullpage from "@fullpage/react-fullpage";
import { ThemeProvider } from "styled-components";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <ThemeProvider theme={{ activeSection }}>
      <Header activeSection={activeSection} />
      <GlobalStyle />

      <ReactFullpage
        anchors={["main", "introduce"]}
        onLeave={(origin, destination, direction) => {
          window.location.hash = destination.anchor;
        }}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <div className="section">
                <Main />
              </div>
              <div className="section">
                <Introduce />
              </div>
            </>
          );
        }}
      />
    </ThemeProvider>
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
