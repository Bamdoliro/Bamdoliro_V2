import React, { useEffect, useState } from "react";
import { createGlobalStyle,ThemeProvider } from "styled-components";
import Header from "./Components/common/Header"
import Main from "./Components/ui/Main";
import ReactFullpage from "@fullpage/react-fullpage";
import Introduce from "./Components/ui/Introduce";
import Projects from "./Components/ui/Projects";
import History from "./Components/ui/History";

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
        anchors={["main", "introduce","projects"]}
        onLeave={(destination) => {
          window.location.hash = destination.anchor;
        }}
        render={() => {
          return (
            <>
              <GlobalStyle />
              <div className="section">
                <Main />
              </div>
              <div className="section">
                <Introduce />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <History />
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
