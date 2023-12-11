import React, { useState, useEffect } from "react";
import * as S from "./style";

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

  return <S.Pointer style={{ left: position.x, top: position.y }} />;
};

export default Circle;
