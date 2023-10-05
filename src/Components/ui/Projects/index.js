import React from 'react';
import styled from 'styled-components';
import maru_symbol from '../../../assets/maru-symbol.svg'

const Projects = () => {
  return (
    <Container>
      <Content>
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
  width: 70%;
`
const Icon_layout = styled.div`
  display: flex;
  width: 368px;
  height: 368px;
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

export default Projects;