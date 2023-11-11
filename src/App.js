import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./Components/common/Header";
import Main from "./Components/ui/Main";
import ReactFullpage from "@fullpage/react-fullpage";
import Introduce from "./Components/ui/Introduce";
import Projects from "./Components/ui/Projects";
import Culture from "./Components/ui/Culture";
import Histories from "./Components/ui/Histories";
import Member from "./Components/ui/Member";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isIntroduceSectionLoaded, setIsIntroduceSectionLoaded] = useState(false);


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

  const navigateToCulture = () => {
    // "culture" 섹션으로 이동하는 로직을 구현
    console.log("Navigating to 'culture' section");
    window.location.hash = 'culture';
  };

  return (
    <ThemeProvider theme={{ activeSection }}>
      <Header activeSection={activeSection} />
      <GlobalStyle />

      <ReactFullpage
        anchors={["main", "introduce", "culture", "projects", "history", "Member"]}
        onLeave={(origin, destination, direction) => {
          if (origin.index === 1 && direction === 'down') {
            setIsIntroduceSectionLoaded(true);

            return false
          } else if (origin.index === 2 && direction === 'up') {
            setIsIntroduceSectionLoaded(false);
          }

          window.location.hash = destination.anchor;
        }}
        render={() => (
          <>
            <GlobalStyle />
            <div className="section">
              <Main />
            </div>
            <div className={`section${isIntroduceSectionLoaded ? ' loaded' : ''}`}>
              <Introduce onNavigateToCulture={navigateToCulture} />
            </div>
            <div className="section">
              <Culture />
            </div>
            <div className="section">
              <Projects />
            </div>
            <div className="section">
              <Histories />
            </div>
            <div className="section">
              <Member />
            </div>
          </>
        )}
        options={{
          licenseKey: null,
          anchors: ["main", "introduce", "culture", "projects", "history", "Member"],
        }}
      />
    </ThemeProvider>
  );
}


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
  }
  .fp-watermark {
    display: none;
  }
`;

export default App;
