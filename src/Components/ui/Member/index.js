import React, { useEffect, useState } from 'react';
import * as S from './style'
import axios from 'axios';
import RightArrow from '../../../assets/arrow.svg'
import Github from '../../../assets/github.svg'


const Member = () => {
  const generations = ['1기', '2기', '3기']
  const positions = ['Front-End', 'Back-End', 'Design']
  const [member, setMember] = useState();
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [selectedPosition, setSelectedPostion] = useState(null)
  const [page,setPage] = useState(0)

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
        const res = await axios.get("https://port-0-bamdoliro-ov-jvpb2alnepf5zj.sel5.cloudtype.app/github")
        setMember(res.data);
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
        <S.ArrowIcon src={RightArrow} onClick={() => setPage(page > 0 ? page - 1 : 0)} />
        {
          member?.slice(page * 4, page * 4 + 4).map((item, index) => (
            <S.CoverLink href={`https://github.com/${item.login}`} target='_blank'>
              <S.Members key={index} >
                <S.MemberImg src={item.avatar_url} />
                <S.Content>
                  <S.Name>
                    {item.name ? item.name : item.login}
                  </S.Name>
                  <S.PosAndGen>position | 기수</S.PosAndGen>
                </S.Content>
                <S.GithubImg src={Github} />
              </S.Members>
            </S.CoverLink>
          ))
        }
        <S.ArrowIcon src={RightArrow} style={{transform: 'scaleX(-1)'}} onClick={() => setPage(page < 3 ? page + 1 : 3)} />
      </S.MemberLayout>
    </S.Layout>
  );
};

export default Member;