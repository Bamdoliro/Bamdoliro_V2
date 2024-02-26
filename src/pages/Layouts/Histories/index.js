import React, { useState } from 'react';
import History from '../../../components/History';
import * as S from './style'

const Histories = () => {
  const years = [2022, 2023]
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0)
  const [selectedYear, setSelectedYear] = useState(0)

  return (
    <S.Layout>
      <S.TitleLayout>
        <S.SubTitle>계속해서 남겨질</S.SubTitle>
        <S.MainTitle>밤돌이로의 발자취</S.MainTitle>
      </S.TitleLayout>
      <S.YearButtonLayout>
        {years.map((year, index) => (
          <S.YearButton key={index} onClick={() => setSelectedYear(index)} selected={selectedYear === index}>
            {year}
          </S.YearButton>
        ))}
      </S.YearButtonLayout>
      <History
        setSelectedMonthIndex={setSelectedMonthIndex}
        selectedMonthIndex={selectedMonthIndex}
        selectedYear={selectedYear}
      />
    </S.Layout>
  );
};

export default Histories;