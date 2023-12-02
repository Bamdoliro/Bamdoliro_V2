import React, { useEffect } from 'react';
import years from "../../datas/years.json"
import checkIcon from '../../assets/Icon-Check.svg'
import * as S from './style'

const History = ({ selectedMonthIndex, setSelectedMonthIndex, selectedYear }) => {

  useEffect(() => {
    setSelectedMonthIndex(0)
  }, [selectedYear])

  return (
    <S.MainContent>
      <S.MonthButtonLayout>
        <S.MonthsButton>
          {years[selectedYear].detail.map((item, index) => (
            <S.MonthButton key={index} onClick={() => setSelectedMonthIndex(index)}>
              <S.Month>{item.month}</S.Month>
              {selectedMonthIndex === index && <S.CheckIcon src={checkIcon} />}
            </S.MonthButton>
          ))}
        </S.MonthsButton>
      </S.MonthButtonLayout>
      <S.BlueCircle>
        <S.Content>
          {years[selectedYear].detail[selectedMonthIndex]?.content}
        </S.Content>
      </S.BlueCircle>
    </S.MainContent>
  );
};

export default History;