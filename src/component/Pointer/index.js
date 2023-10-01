import React, { useState, useEffect } from "react";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const circleSize = 456;
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
        width: "456px",
        height: "456px",
        borderRadius: "50%",
        backgroundColor: "white",
      }}
    ></div>
  );
};

export default Circle;
