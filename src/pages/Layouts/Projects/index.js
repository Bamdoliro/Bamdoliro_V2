import React, { useState } from 'react';
import Project from '../../../components/Project';
import projects from '../../../datas/projects.json'
import check_icon from '../../../assets/Icon-Check.svg'
import * as S from './style'

const Projects = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);
  return (
    <>
      <S.Header_icon>
        {projects.map((item, index) => {
          return (
            <S.Header_layout key={index} onClick={() => setSelectedIconIndex(index)}>
              <S.Header_maru src={require(`../../../assets/${item.img}`)} />
              {selectedIconIndex === index && <S.CheckIcon src={check_icon} />}
            </S.Header_layout>
          )
        })}
      </S.Header_icon>
      {selectedIconIndex < projects.length && (
        <Project
          title={projects[selectedIconIndex].title}
          info={projects[selectedIconIndex].info}
          symbol={projects[selectedIconIndex].img}
        />
      )}
    </>
  );
};

export default Projects;