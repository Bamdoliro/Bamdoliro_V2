import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./Components/common/Header";
import Main from "./Components/ui/Main";
import ReactFullpage from "@fullpage/react-fullpage";
import Introduce from "./Components/ui/Introduce";
import Culture from "./Components/ui/Culture";
import Projects from "./Components/ui/Projects";
import Histories from "./Components/ui/Histories";
import Member from "./Components/ui/Member";
import Hash from "./Components/common/Hash";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isIntroduceLoad, setIsIntroduceLoad] = useState(false);
  const [textNumber, setTextNumber] = useState(0);

  const navigateToNextPage = (e) => {
    if (e === "introduce") {
      window.location.hash = "culture";
    }
    if (e === "culture") {
      window.location.hash = "projects";
    }
  };

  return (
    <ThemeProvider theme={{ activeSection }}>
      <Header activeSection={activeSection} />
      <GlobalStyle />
      <Hash setActiveSection={setActiveSection}/>
      <ReactFullpage
        anchors={["main", "introduce", "culture", "projects", "history", "member"]}
        onLeave={(origin, destination, direction) => {
          if (origin.index === 1 && direction === "down") {
            setIsIntroduceLoad(true);
            return false;
          } else if (origin.index === 2 && direction === "up") {
            setIsIntroduceLoad(false);
          } else if (origin.index === 2 && destination.index === 3 && textNumber <= 2) {
            return false;
          }
          window.location.hash = destination.anchor;
        }}
        render={() => (
          <>
            <GlobalStyle />
            <div className="section">
              <Main />
            </div>
            <div className={`section${isIntroduceLoad ? " loaded" : ""}`}>
              <Introduce onNavigateToNextPage={navigateToNextPage} />
            </div>
            <div className="section">
              <Culture
                onNavigateToNextPage={navigateToNextPage}
                textNumber={textNumber}
                setTextNumber={setTextNumber}
              />
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
          anchors: ["main", "introduce", "culture", "projects", "history", "member"],
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
