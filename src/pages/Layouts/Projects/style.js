import styled from "styled-components"

export const Header_icon = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%,0);
  display: flex;
  gap: 12px;
`
export const Header_layout = styled.button`
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
export const Header_maru = styled.img`
  width: 48px;
  height: 44px;
`
export const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center precisely */
  width: 77px;
  height: 77px;
`