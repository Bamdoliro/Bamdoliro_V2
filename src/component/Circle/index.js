import React, { useState, useEffect } from "react";

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

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        backgroundColor: "white",
        filter: "blur(20px)",
        transitionProperty: "left top",
        transitionDuration: "0.2s",
        transition: ".3s ease-out",
      }}
    ></div>
  );
};

export default Circle;
