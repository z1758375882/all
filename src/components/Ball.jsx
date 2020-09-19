import React from "react";

function ball(props) {
  const { v } = props;
  return <div className="ball" style={{ backgroundColor: v }}></div>;
}

export default ball;
