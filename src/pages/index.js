import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Hash from "../components/Hash";
import ReactFullpage from "@fullpage/react-fullpage";
import Main from "./Layouts/Main";
import Introduce from "./Layouts/Introduce";
import Culture from "./Layouts/Culture";
import Projects from "./Layouts/Projects";
import Histories from "./Layouts/Histories";
import Member from "./Layouts/Member";
import Wind from "./Layouts/Wind";
import Footer from "./Layouts/Footer/index";
const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isIntroduceLoad, setIsIntroduceLoad] = useState(false);
  const [textNumber, setTextNumber] = useState(0);
  const [isHeaderClicked, setIsHeaderClicked] = useState(false);

  // 헤더에서 a 태그 클릭을 감지하는 함수
  const handleHeaderClick = () => {
    setIsHeaderClicked(true);
  };

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
      {/* 헤더 컴포넌트에게 a 태그를 클릭했을 시 isHeaderClicked를 true로 바꾸게, handelHeaderClick을 전달 */}
      <Header activeSection={activeSection} onHeaderClick={handleHeaderClick} />
      <GlobalStyle />
      <Hash setActiveSection={setActiveSection} />
      <ReactFullpage
        anchors={[
          "main",
          "introduce",
          "culture",
          "projects",
          "history",
          "member",
          "wish",
          "footer",
        ]}
        onLeave={(origin, destination, direction) => {
          if (!isHeaderClicked) {
            if (origin.index === 1 && direction === "down") {
              setIsIntroduceLoad(true);
              return false;
            } else if (origin.index === 2 && direction === "up") {
              setIsIntroduceLoad(false);
            } else if (
              origin.index === 2 &&
              destination.index === 3 &&
              textNumber <= 2
            ) {
              return false;
            }
          }
          // a 태그 클릭 이후에는 다시 false로 설정
          setIsHeaderClicked(false);
          window.location.hash = destination.anchor;
        }}
        render={({ state, fullpageApi }) => {
          return (
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
              <div className="section">
                <Wind />
              </div>
              <div className="section fp-auto-height" >
                <Footer />
              </div>
              
            </>
          )
        }
      }
        options={{
          licenseKey: null,
          anchors: [
            "main",
            "introduce",
            "culture",
            "projects",
            "history",
            "member",
            "wish",
            "footer",
          ],
        }}
      />
    </ThemeProvider>
  );
};

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


export default Home;
