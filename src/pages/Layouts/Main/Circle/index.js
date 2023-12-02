import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const circleSize = 320;
    const circleRadius = circleSize / 2;
    setPosition({
      x: e.clientX - circleRadius,
      y: e.clientY - circleRadius,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <Pointer style={{ left: position.x, top: position.y }} />;
};

const Pointer = styled.div`
  position: fixed;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: white;
  filter: blur(20px);
  transition-property: left top;
  transition-duration: 0.2s;
  transition: 0.2s ease-out;
`;

export default Circle;
