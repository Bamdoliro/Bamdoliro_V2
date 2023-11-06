import React, { useState } from 'react';
import styled from 'styled-components';
import History from '../../common/History';

const Histories = () => {
  const [selectedMonthIndex,setSelectedIconIndex] = useState(0)
  const [selectedYear,setSelectedYear] = useState(0)
  console.log(selectedYear)
  
  return (
    <Layout>
      <TitleLayout>
        <SubTitle>계속해서 남겨질</SubTitle>
        <MainTitle>밤돌이로의 발자취</MainTitle>
      </TitleLayout>
      <YearButton>
        <Button2022 onClick={() => setSelectedYear(0)} selected={selectedYear === 0}>2022</Button2022>
        <Button2023 onClick={() => setSelectedYear(1)} selected={selectedYear === 0}>2023</Button2023>
      </YearButton>
      <History
        setSelectedIconIndex={setSelectedIconIndex}
        selectedMonthIndex={selectedMonthIndex}
        selectedYear={selectedYear}
      />
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 68px;
`
const SubTitle = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const MainTitle = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-family: Pretendard;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const YearButton = styled.div`
  position: absolute;
  top: 182px;
  display: flex;
  gap: 30px;
`
const Button2022 = styled.button`
  display: flex;
  padding: 8px 24px;
  gap: 6px;
  border-radius: 80px;
  background: ${(props) => props.selected ? 'var(--navy, #6699ED)' : '#fff'};
  box-shadow: 1px 2px 5px 0px rgba(184, 184, 184, 0.60);
  border: none;
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
`;

const Button2023 = styled.button`
  display: flex;
  padding: 8px 24px;
  gap: 6px;
  border-radius: 80px;
  background: ${(props) => props.selected ? '#fff' : 'var(--navy, #6699ED)'};
  box-shadow: 1px 2px 5px 0px rgba(184, 184, 184, 0.60);
  border: none;
  color: ${(props) => (props.selected ? '#000000' : '#ffffff')};
`;


export default Histories;