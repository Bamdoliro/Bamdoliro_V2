import React, { useEffect, useState } from 'react';
import * as S from './style'
import axios from 'axios';


const Member = () => {
  const generations = ['1기', '2기', '3기']
  const positions = ['Front-End', 'Back-End', 'Design']
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [selectedPosition, setSelectedPostion] = useState(null)

  const onGenerationClick = (index) => {
    if (selectedGeneration === index) {
      setSelectedGeneration(null);
    } else {
      setSelectedGeneration(index);
    }
  }
  const onPositionClick = (index) => {
    if (selectedPosition === index) {
      setSelectedPostion(null);
    } else {
      setSelectedPostion(index);
    }
  }
  
  useEffect(() => {
    const getMemberData = async() => {
      try{
        const res = await axios.get("https://port-0-bamdoliro-ov-jvpb2alnepf5zj.sel5.cloudtype.app/github");
        console.log(res.data)
      } catch (err){
        console.log(err)
      }
    }
    getMemberData()
  }, [])

  return (
    <S.Layout>
      <S.Titles>
        <S.MainTitle>TEAM MEMBER</S.MainTitle>
        <S.SubTitle>끊임없이 나아가는 사람들</S.SubTitle>
      </S.Titles>
      <S.GenerationButtons>
        {
          generations.map((item, index) => {
            return (
              <S.Generation
                onClick={() => onGenerationClick(index)}
                selected={selectedGeneration === index}
              >
                {item}
              </S.Generation>
            )
          })
        }
      </S.GenerationButtons>
      <S.PositionButtons>
        {
          positions.map((item, index) => {
            return (
              <S.Position
                onClick={() => onPositionClick(index)}
                selected={selectedPosition == index}
              >
                {item}
              </S.Position>
            )
          })
        }
      </S.PositionButtons>
      <S.MemberLayout>

      </S.MemberLayout>
    </S.Layout>
  );
};

export default Member;