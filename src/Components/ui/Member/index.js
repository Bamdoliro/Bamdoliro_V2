import React from 'react';
import * as S from './style'


const Member = () => {
  const generations = ['1기','2기','3기']
  const positions = ['Front-End','Back-End','Design']
  return (
    <S.Layout>
      <S.Titles>
        <S.MainTitle>TEAM MEMBER</S.MainTitle>
        <S.SubTitle>끊임없이 나아가는 사람들</S.SubTitle>
      </S.Titles>
      <S.GenerationButtons>
        {
          generations.map((item,index) => {
            return (
              <S.Generation>{item}</S.Generation>
            )
          })
        }
      </S.GenerationButtons>
      <S.PositionButtons>
        {
          positions.map((item,index) => {
            return (
              <S.Position>{item}</S.Position>
            )
          })
        }
      </S.PositionButtons>
    </S.Layout>
  );
};

export default Member;