import React, { useEffect, useState } from 'react';
import * as S from './style'
import axios from 'axios';
import RightArrow from '../../../assets/arrow.svg'
import Github from '../../../assets/github.svg'


const Member = () => {
  const generations = ['1기', '2기', '3기']
  const positions = ['Frontend', 'Backend', 'Designer']
  const [member, setMember] = useState([]);
  const [filteredMember, setFilteredMember] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState([])
  const [page, setPage] = useState(0)

  console.log(selectedPosition)

  const onGenerationClick = (index) => {
    if (selectedGeneration === index) {
      setSelectedGeneration(null)
    } else {
      setSelectedGeneration(index)
    }
  }
  const onPositionClick = (index) => {
    
  };

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const res = await axios.get("https://port-0-bamdoliro-ov-jvpb2alnepf5zj.sel5.cloudtype.app/position/list")
        setMember(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMemberData()
  }, [])

  useEffect(() => {
    if (member){
      setFilteredMember(member.filter((item) => selectedPosition.includes(item.position)))
      setPage(0)
    }
  }, [selectedPosition])

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
                onClick={() => {
                  let newPosition;
                  if (selectedPosition.includes(item)){
                    newPosition = selectedPosition.filter((activePos) => item !== activePos)
                  } else {
                    newPosition = [...selectedPosition, item]
                  }
                  setSelectedPosition(newPosition)}
                }
                selected={selectedPosition.includes(index)}
              >
                {item}
              </S.Position>
            )
          })
        }
      </S.PositionButtons>
      <S.MemberLayout>
        <S.ArrowIcon src={RightArrow} onClick={() => setPage(page > 0 ? page - 1 : 0)} />
        <S.MembersBox>
          {
            filteredMember?.slice(page * 4, page * 4 + 4).map((item, index) => {
                return (
                  <S.CoverLink href={`https://github.com/${item.githubId}`} target='_blank' key={index}>
                    <S.Members>
                      <S.MemberImg src={item.profile_url} />
                      <S.Content>
                        <S.Name>
                          {item.name ? item.name : item.githubId}
                        </S.Name>
                        <S.PosAndGen>{item.position} | {item.generation}기</S.PosAndGen>
                      </S.Content>
                      <S.GithubImg src={Github} />
                    </S.Members>
                  </S.CoverLink>
                )
            })
          }
        </S.MembersBox>

        <S.ArrowIcon src={RightArrow} style={{ transform: 'scaleX(-1)' }} onClick={() => setPage(page < 4 ? page + 1 : 4)} />
      </S.MemberLayout>
    </S.Layout>
  );
};

export default Member;