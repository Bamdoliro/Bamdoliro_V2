import React, { useEffect } from 'react';
import years from "../../../datas/History/years.json"
import checkIcon from '../../../assets/Icon-Check.svg'
import styled from 'styled-components';

const History = ({ selectedMonthIndex, setSelectedMonthIndex, selectedYear }) => {

  useEffect(() => {
    setSelectedMonthIndex(0)
  }, [selectedYear])

  return (
    <MainContent>
      <MonthButtonLayout>
        <MonthsButton>
          {years[selectedYear].detail.map((item, index) => (
            <MonthButton key={index} onClick={() => setSelectedMonthIndex(index)}>
              <Month>{item.month}</Month>
              {selectedMonthIndex === index && <CheckIcon src={checkIcon} />}
            </MonthButton>
          ))}
        </MonthsButton>
      </MonthButtonLayout>
      <BlueCircle>
        <Content>
          {years[selectedYear].detail[selectedMonthIndex]?.content}
        </Content>
      </BlueCircle>
    </MainContent>
  );
};


const MainContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: flex-start;
`
const BlueCircle = styled.div`
  position: absolute;
  right: -10%;
  width: 670px;
  height: 670px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: var(--navy, #6699ED);
  backdrop-filter: blur(4px);
`
const Content = styled.p`
  color: var(--white, #FFF);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 170px;
  padding-left: 120px;
  width: 500px;
  white-space: pre-line;
`
const MonthButtonLayout = styled.div`
  display: flex;
  height: 400px;
  width: 140px;
  margin-left: 11%;
  gap: 20px;
`
const MonthsButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 400px;
  gap: 10px;
  position: relative;
`
const MonthButton = styled.button`
  width: 122px;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--white, #FFF);
  box-shadow: 1px 3px 5px 2px rgba(128, 124, 124, 0.20);
  border: none;
  position: relative;
`
const Month = styled.p`
  color: var(--grey3, #3E3D3F);
  font-family: Pretendard;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`

export default History;