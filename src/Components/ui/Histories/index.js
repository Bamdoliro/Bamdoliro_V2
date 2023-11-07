import React, { useState } from 'react';
import styled from 'styled-components';
import History from '../../common/History';

const Histories = () => {
  const years = [2022, 2023]
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0)
  const [selectedYear, setSelectedYear] = useState(0)

  return (
    <Layout>
      <TitleLayout>
        <SubTitle>계속해서 남겨질</SubTitle>
        <MainTitle>밤돌이로의 발자취</MainTitle>
      </TitleLayout>
      <YearButtonLayout>
        {years.map((year, index) => (
          <YearButton key={index} onClick={() => setSelectedYear(index)} selected={selectedYear === index}>
            {year}
          </YearButton>
        ))}
      </YearButtonLayout>
      <History
        setSelectedMonthIndex={setSelectedMonthIndex}
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
  top: 82px;
`
const SubTitle = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-size: 35px;
  font-weight: bold;
`
const MainTitle = styled.p`
  color: var(--grey3, #3E3D3F);
  text-align: center;
  font-size: 52px;
  font-weight: bold;
`
const YearButtonLayout = styled.div`
  position: absolute;
  top: 182px;
  display: flex;
  gap: 30px;
  margin-top: 16px;
`
const YearButton = styled.button`
  display: flex;
  padding: 8px 24px;
  gap: 6px;
  border-radius: 80px;
  background: ${(props) => props.selected ? 'var(--navy, #6699ED)' : '#fff'};
  box-shadow: 1px 2px 5px 0px rgba(184, 184, 184, 0.60);
  border: none;
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
`;

export default Histories;