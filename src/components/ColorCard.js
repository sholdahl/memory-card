import React from "react";

const ColorCard = (props) => {
  const { colorCode, colorName, clicked, handleClick, index } = props;

  return (
    <div className="color-card-wrapper col-6 col-md-4 col-lg-3 col-xl-2">
      <div className="color-card" data-clicked={clicked} data-index={index} onClick={handleClick}>
        <div className="color-display" style={{ background: colorCode }}></div>
        <h4 className="color-name">{colorName}</h4>
      </div>
    </div>
  );
};

export default ColorCard;
