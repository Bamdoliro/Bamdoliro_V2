import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  gap: 330px;
`;
export const Icon_layout = styled.div`
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
export const Icon = styled.img`
  width: 200px;
  height: 187px;
`;
export const Text_content = styled.div`
  margin-top: 64px;
`;
export const Project_title = styled.p`
  color: #6699ed;
  font-size: 36px;
  font-weight: 500;
`;
export const Project_name = styled.p`
  color: var(--grey3, #3e3d3f);
  font-size: 65px;
  margin-top: 8px;
  margin-bottom: 30px;
  font-weight: 700;
`;
export const Project_info = styled.p`
  color: var(--grey3, #3e3d3f);
  font-size: 28px;
  font-weight: 700;
  white-space: pre-wrap;
  width: 440px;
`;