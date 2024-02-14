import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${(props) =>
    ["introduce", "culture", "projects", "histories", "member"].includes(
      props.activeSection
    )
      ? "white"
      : "rgba(62, 61, 63, 0.30)"};
  border-bottom: 1px solid rgba(62, 61, 63, 0.3);
  backdrop-filter: blur(5px);
`;

export const Link = styled.div``;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  color: black;
  width: 100vw;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  margin-left: 170px;
`;

export const MenuItem = styled.li`
  width: 75px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-right: 30px;
  cursor: pointer;
  position: relative;

  color: ${(props) =>
    ["introduce", "culture", "projects", "histories", "member"].includes(
      props.activeSection
    )
      ? "black"
      : "white"};

  &:hover::before {
    content: "";
    position: absolute;
    top: -8px;
    left: -12px;
    right: -12px;
    bottom: -8px;
    background: rgba(238, 238, 238, 0.6);
    z-index: -1;
    border-radius: 6px;
  }
`;

export const Text = styled.div`
  display: flex;
`;
export const Url = styled.a`
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 170px;
  height: 20px;
  margin-right: 500px;
`;
