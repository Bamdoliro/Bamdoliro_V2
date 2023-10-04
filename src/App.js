import Header from "./Components/Header/index";
import Main from "./Components/Main/index";
import Circle from "./Components/Circle/index";
import {styled, createGlobalStyle} from "styled-components";
import Introduce from "./Components/Introduce";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  return (
    <>
      <ReactFullpage
        anchors={[
          'main',
          'introduce',
        ]}
        render={() => {
          return (
            <>
              <GlobalStyle />
              <div className="section">
                <Container>
                  <StyledHeader />
                  <StyledCircle />
                  <Main />
                </Container>
              </div>
              <div className="section">
                <Introduce/>
              </div>
            </>
          )
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #3e3d3f;
`;

const StyledHeader = styled(Header)`
  position: relative;
  z-index: 2;
`;

const StyledCircle = styled(Circle)`
  position: relative;
  z-index: 1;
`;

export default App;
