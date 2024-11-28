import React, { useState } from "react";

const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    console.log(position);
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};
export default MouseTracker;
