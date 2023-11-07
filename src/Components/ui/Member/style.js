import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  gap: 4px;
`
export const MainTitle = styled.h1`
  color: var(--navy, #6699ED);
  font-size: 28px;
  font-weight: 500;
`
export const SubTitle = styled.h1`
  color: var(--grey3, #3E3D3F);
  font-size: 40px;
  font-weight: 700;
`
export const GenerationButtons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
`
export const Generation = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.selected ? 'var(--navy, #6699ED)' : 'var(--grey3, #3E3D3F)')};
`
export const PositionButtons = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 20px;
`
export const Position = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  border-radius: 80px;
  border: none;
  box-shadow: 1px 2px 5px 0px rgba(184, 184, 184, 0.60);
  background: ${(props) => (props.selected ? 'var(--navy, #6699ED)' : '#FFF')};
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.selected ? '#FFF' : 'var(--grey3, #3E3D3F)')};
`
export const MemberLayout = styled.div`
  margin-top: 32px;
  width: 1048px;
  height: 332px;
  background-color: aliceblue;
  gap: 20px;
`