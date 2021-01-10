import React from "react";

const ColorCard = (props) => {
    const {colorCode, colorName} = props

    return (
      <div className="col-6 col-m-4 col-l-3 col-xl-2 color-card" data-id={colorCode}>
          <div className="color-display" style={{background: colorCode}}></div>
          <h4 className="color-name">{colorName}</h4>
      </div>
    );
  };
  
  export default ColorCard;