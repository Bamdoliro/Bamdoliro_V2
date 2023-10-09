import React, { useState } from 'react';
import Project from '../../common/Project';
import projects from '../../../datas/projects.json'
import check_icon from '../../../assets/Icon-Check.svg'
import styled from 'styled-components';

const Projects = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const onHeaderIconClick = (index) => {
    setSelectedIconIndex(index);
  };
  return (
    <>
      <Header_icon>
        {projects.map((item, index) => {
          return (
            <Header_layout key={index} onClick={() => onHeaderIconClick(index)}>
              <Header_maru src={require(`../../../assets/${item.img}`)} />
              {selectedIconIndex === index && <CheckIcon src={check_icon} />}
            </Header_layout>
          )
        })}
      </Header_icon>
      {selectedIconIndex < projects.length && (
        <Project title={projects[selectedIconIndex].title} info={projects[selectedIconIndex].info} symbol={projects[selectedIconIndex].img}/>
      )}
      
    </>
  );
};
const Header_icon = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%,0);
  display: flex;
  gap: 12px;
`
const Header_layout = styled.button`
  display: flex;
  width: 77px;
  height: 77px;
  padding: 17px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 180px;
  background: #FFF;
  box-shadow: 1px 2px 5px 0px rgba(184, 184, 184, 0.60);
  border: none;
  position: relative;
  cursor:pointer;
`
const Header_maru = styled.img`
  width: 48px;
  height: 44px;
`
const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center precisely */
  width: 77px;
  height: 77px;
`

export default Projects;