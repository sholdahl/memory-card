import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard"

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="container-fluid">
      <Header title="Memory Game" highScore={highScore} currentScore={currentScore} />
      <GameBoard highScore={highScore} currentScore={currentScore} setCurrentScore={setCurrentScore} setHighScore={setHighScore}/>
    </div>
  );
};

export default App;
