import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

function Main() {
  const Font = styled.div`
    font-family: Pretendard;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #3e3d3f;

    position: relative;
    pointer-events: none;
  `;

  const Text = styled.div`
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    color: white;

    cursor: pointer;
  `;

  return (
    <>
      <GlobalStyle />

      <div
        className="font1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "60%",
          left: "75%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Font>밤돌이로</Font>
      </div>
      <div
        className="font2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "35%",
          left: "25%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Font>밤마다</Font>
      </div>
      <div
        className="text"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center ",
          position: "absolute ",
          bottom: "5% ",
          left: "50% ",
          transform: "translate(-50%, -50%) ",
        }}
      >
        <Text>{`커서를 움직여 불빛을 비춰보세요`}</Text>
      </div>
    </>
  );
}

export default Main;
