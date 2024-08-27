// src/components/Tooltip.jsx

import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ skill, message, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="tooltip-container" onClick={handleClick}>
      {children}
      {isVisible && (
        <div className="tooltip-content">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
