import React, { useState, useEffect } from "react";
import ColorCard from "./ColorCard";

const GameBoard = (props) => {
  const { highScore, setHighScore, currentScore, setCurrentScore } = props;
  const [colorArray, setColorArray] = useState([
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
    { colorCode: "#4e9", colorName: "Awesome Color" },
  ]);

  return (
    <div className="row justify-content-center game-board">
      {colorArray.map((colorInfo) => {
        return <ColorCard colorCode={colorInfo.colorCode} colorName={colorInfo.colorName} />;
      })}
    </div>
  );
};

export default GameBoard;
