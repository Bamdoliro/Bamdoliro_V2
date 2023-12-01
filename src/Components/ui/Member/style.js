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
  position: relative;
  margin-top: 32px;
  width: 1096px;
  height: 328px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const CoverLink = styled.a`
  text-decoration: none;
  height: 100%;
`
export const Members = styled.div`
  width: 240px;
  height: 100%;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 10px 1px rgba(149, 149, 149, 0.25);
  position: relative;
`
export const MemberImg = styled.img`
  width: 100%;
  height: 72%;
  background-color: aliceblue;
  border-radius: 8px 8px 0 0;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  margin-top: 12px;
  margin-left: 12px;
`

export const Name = styled.h3`
  width: 170px;
  color: var(--grey3, #3E3D3F);
  font-size: 22px;
  font-weight: 600;
`
export const PosAndGen = styled.p`
  color: var(--grey3, #3E3D3F);
  font-size: 16px;
  font-weight: 600;
`
export const ArrowIconImg = styled.img`
  cursor: pointer;
`
export const LArrowIconButton = styled.button`
  position: absolute;
  width: 31px;
  height: 47px;
  left: 0;
  border: none;
  background-color: #FFF;
`
export const RArrowIconButton = styled.button`
  position: absolute;
  width: 31px;
  height: 47px;
  right: 0;
  border: none;
  background-color: #FFF;
`
export const GithubImg = styled.img`
  position: absolute;
  top: 77%;
  right: 6%;
  width: 28px;
  height: 28px;
`
export const MembersBox = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 38px;
  height: 100%;
`