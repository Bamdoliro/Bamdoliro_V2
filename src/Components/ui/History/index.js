import React from 'react';
import styled from 'styled-components';

const History = () => {
  return (
    <>
      <TitleLayout>
        <SubTitle>계속해서 남겨질</SubTitle>
        <MainTitle>밤돌이로의 발자취</MainTitle>
      </TitleLayout>
    </>
  );
};

const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
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


export default History;