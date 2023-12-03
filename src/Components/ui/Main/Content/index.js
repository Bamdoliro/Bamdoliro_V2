import { styled } from "styled-components";

function Content() {
  return (
    <>
      <Bamdoliro>
        <Font>밤돌이로</Font>
      </Bamdoliro>
      <Bammada>
        <Font>밤마다</Font>
      </Bammada>
      <Cursor>
        <Text>커서를 움직여 불빛을 비춰보세요</Text>
      </Cursor>
    </>
  );
}

const Font = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: #191919;
  position: relative;
  pointer-events: none;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: white;
  cursor: none;
`;

const Bamdoliro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 75%;
  transform: translate(-50%, -50%);
`;

const Bammada = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);
`;

const Cursor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Content;
