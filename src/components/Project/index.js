import React from "react";
import * as S from './style';

const Project = ({ title, info, symbol }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Text_content>
          <S.Project_title>Project</S.Project_title>
          <S.Project_name>{title}</S.Project_name>
          <S.Project_info>{info}</S.Project_info>
        </S.Text_content>
        <S.Icon_layout>
          <S.Icon src={require(`../../assets/${symbol}`)} />
        </S.Icon_layout>
      </S.Content>
    </S.Container>
  );
};

export default Project;
