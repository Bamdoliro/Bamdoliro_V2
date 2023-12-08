import React, { useEffect, useState } from 'react';
import * as S from './style'
import axios from 'axios';
import Arrow from '../../../assets/arrow.svg'
import githubImage from '../../../assets/github.svg'

const Member = () => {
  const generations = [1, 2, 3]
  const positions = ['Frontend', 'Backend', 'Designer']
  const profilesPage = 4
  const [member, setMember] = useState([])
  const [filteredMember, setFilteredMember] = useState([])
  const [selectedGeneration, setSelectedGeneration] = useState([])
  const [selectedPosition, setSelectedPosition] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getMemberData = async () => {
      try {
        const res = await axios.get("https://port-0-bamdoliro-ov-jvpb2alnepf5zj.sel5.cloudtype.app/position/list?")
        setMember(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMemberData()
  }, [])

  useEffect(() => {
    if (member) {
      setFilteredMember(
        member.filter(
          (item) =>
            (selectedPosition.includes(item.position) || !selectedPosition.length) &&
            (selectedGeneration.includes(item.generation) || !selectedGeneration.length)
        )
      )
      setCurrentPage(1)
    }
  }, [member,selectedPosition, selectedGeneration])

  const handleMemberPageChange = (page) => {
    setCurrentPage(page);
  }

  const totalPages = Math.ceil(filteredMember.length / profilesPage)
  const startIndex = (currentPage - 1) * profilesPage
  const endIndex = startIndex + profilesPage

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
                onClick={() => {
                  let newGeneration;
                  if (selectedGeneration.includes(item)) {
                    newGeneration = selectedGeneration.filter((activeGen) => item !== activeGen)
                  } else {
                    newGeneration = [...selectedGeneration, item]
                  }
                  setSelectedGeneration(newGeneration)
                }
                }
                selected={selectedGeneration.includes(item)}
              >
                {item}기
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
                  if (selectedPosition.includes(item)) {
                    newPosition = selectedPosition.filter((activePos) => item !== activePos)
                  } else {
                    newPosition = [...selectedPosition, item]
                  }
                  setSelectedPosition(newPosition)
                }
                }
                selected={selectedPosition.includes(item)}
              >
                {item}
              </S.Position>
            )
          })
        }
      </S.PositionButtons>
      <S.MemberLayout>
        <S.LArrowIconButton
          onClick={() => handleMemberPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <S.ArrowIconImg src={Arrow} style={{ transform: 'scaleX(-1)' }} />
        </S.LArrowIconButton>
        <S.MembersBox>
          {
            filteredMember?.slice(startIndex, endIndex).map((item, index) => {
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
                    <S.GithubImg src={githubImage} />
                  </S.Members>
                </S.CoverLink>
              )
            })
          }
        </S.MembersBox>
        <S.RArrowIconButton
          onClick={() => handleMemberPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          <S.ArrowIconImg src={Arrow} />
        </S.RArrowIconButton>
      </S.MemberLayout>
    </S.Layout>
  );
};

export default Member;