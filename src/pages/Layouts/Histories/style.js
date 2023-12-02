import styled from "styled-components"

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 82px;
`
export const SubTitle = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`
export const MainTitle = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-size: 52px;
  font-weight: bold;
`
export const YearButtonLayout = styled.div`
  position: absolute;
  top: 182px;
  display: flex;
  gap: 30px;
  margin-top: 16px;
`
export const YearButton = styled.button`
  display: flex;
  padding: 8px 24px;
  gap: 6px;
  border-radius: 80px;
  background: ${(props) => props.selected ? 'var(--navy, #6699ED)' : '#fff'};
  box-shadow: 1px 2px 5px 0px rgba(184, 184, 184, 0.60);
  border: none;
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
`;