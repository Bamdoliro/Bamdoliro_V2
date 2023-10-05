import React from 'react';
import styled from 'styled-components';
import maru_symbol from '../../../assets/maru-symbol.svg'

const Projects = () => {
  return (
    <Container>
      <Content>
        <Text_content>
          <Project>Project</Project>
          <Maru>마루</Maru>
          <Project_info>마루는 부산소마고의<br/>입학 지원서비스입니다.</Project_info>
        </Text_content>
        <Icon_layout>
          <Icon src={maru_symbol} />
        </Icon_layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  display: flex;
  gap: 400px;
`
const Icon_layout = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  padding: 90px 84px 91px 84px;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 1px 3px 5px 2px rgba(128, 124, 124, 0.20);
`
const Icon = styled.img`
  width: 200px;
  height: 187px;
`
const Text_content = styled.div`
  margin-top: 64px;
`
const Project = styled.p`
  color: #6699ED;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
const Maru = styled.p`
  color: var(--grey3, #3E3D3F);
  font-family: Pretendard;
  font-size: 65px;
  font-style: normal;
  margin-top: 8px;
  font-weight: 700;
  line-height: normal;
`
const Project_info = styled.p`
  color: var(--grey3, #3E3D3F);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export default Projects;