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
  font-family: Pretendard;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #191919;

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
