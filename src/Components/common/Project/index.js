import React from "react";
import styled from "styled-components";

const Project = ({ title, info, symbol }) => {
  return (
    <Container>
      <Content>
        <Text_content>
          <Project_title>Project</Project_title>
          <Project_name>{title}</Project_name>
          <Project_info>{info}</Project_info>
        </Text_content>
        <Icon_layout>
          <Icon src={require(`../../../assets/${symbol}`)} />
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
`;
const Content = styled.div`
  display: flex;
  gap: 330px;
`;
const Icon_layout = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  padding: 90px 84px 91px 84px;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 1px 3px 5px 2px rgba(128, 124, 124, 0.2);
`;
const Icon = styled.img`
  width: 200px;
  height: 187px;
`;
const Text_content = styled.div`
  margin-top: 64px;
`;
const Project_title = styled.p`
  color: #6699ed;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Project_name = styled.p`
  color: var(--grey3, #3e3d3f);
  font-family: Pretendard;
  font-size: 65px;
  font-style: normal;
  margin-top: 8px;
  margin-bottom: 30px;
  font-weight: 700;
  line-height: normal;
`;
const Project_info = styled.p`
  color: var(--grey3, #3e3d3f);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: pre-wrap;
  width: 440px;
`;

export default Project;
