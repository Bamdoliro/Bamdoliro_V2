import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${(props) =>
    props.activeSection === "introduce" ||
    props.activeSection === "culture" ||
    props.activeSection === "projects" ||
    props.activeSection === "history" ||
    props.activeSection === "member"
      ? "rgba(255, 255, 255, 0.06)"
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
  list-style-type: none;
  margin-right: 30px;
  cursor: pointer;
  position: relative;

  color: ${(props) => (props.className === "active" ? "black" : "white")};

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
  display:flex;
  margin-left:auto;
  margin-right:17              %;
`
export const Url = styled.a`
  text-decoration : none;
` 

export const Logo = styled.img`
  width: 170px;
  height: 20px;
  margin-right: 570px;
`;

/*import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${(props) =>
    props.activeSection === "introduce" ||
    props.activeSection === "culture" ||
    props.activeSection === "projects" ||
    props.activeSection === "history" ||
    props.activeSection === "member"
      ? "rgba(255, 255, 255, 0.06)"
      : "rgba(62, 61, 63, 0.30)"};
  border-bottom: 1px solid rgba(62, 61, 63, 0.3);
  backdrop-filter: blur(5px);
`;

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
  list-style-type: none;
  margin-right: 30px;
  cursor: pointer;
  position: relative;

  color: ${(props) => (props.className === "active" ? "black" : "white")};

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

export const Logo = styled.img`
  width: 170px;
  height: 20px;
  margin-right: 570px;
`;
*/
