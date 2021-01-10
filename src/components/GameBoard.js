import React, { useState, useEffect } from "react";
import ColorCard from "./ColorCard";

const GameBoard = (props) => {
  const { highScore, setHighScore, currentScore, setCurrentScore } = props;
  const [colorArray, setColorArray] = useState([
    { colorCode: "#f89696", clicked: false, colorName: "Geraldine" },
    { colorCode: "#f8b195", clicked: false, colorName: "Rose Bud" },
    { colorCode: "#f8e596", clicked: false, colorName: "Marzipan" },
    { colorCode: "#d2f896", clicked: false, colorName: "Mindaro" },
    { colorCode: "#96f89f", clicked: false, colorName: "Mint Green" },
    { colorCode: "#96f8d6", clicked: false, colorName: "Aqua Marine" },
    { colorCode: "#96f4f8", clicked: false, colorName: "Charlotte" },
    { colorCode: "#96bff8", clicked: false, colorName: "Malibu" },
    { colorCode: "#9b96f8", clicked: false, colorName: "Portage" },
    { colorCode: "#c296f8", clicked: false, colorName: "Perfume" },
    { colorCode: "#ee96f8", clicked: false, colorName: "Mauve" },
    { colorCode: "#f896cc", clicked: false, colorName: "Illusion" },
  ]);

  const shuffle = (inputArray) => {
    let array = [...inputArray];
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(()=>{
    console.log("component did mount");
  },[])

  const handleClick = (e) => {
    const index = e.target.parentNode.getAttribute("data-index");
    const clicked = e.target.parentNode.getAttribute("data-clicked");
    if (clicked === "false") {
      setCurrentScore(currentScore + 1);
      setColorArray((colorArray[index].clicked = true));
    } else {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      let array = colorArray
      setColorArray(
        array.forEach((color) => {
          color.clicked = false;
        })
      );
    };
    setColorArray(shuffle(colorArray))
  };

  return (
    <div className="row justify-content-center game-board">
      {colorArray.map((colorInfo, index) => {
        return (
          <ColorCard
            colorCode={colorInfo.colorCode}
            colorName={colorInfo.colorName}
            clicked={colorInfo.clicked}
            handleClick={handleClick}
            index={index}
            key={colorInfo.colorCode}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
