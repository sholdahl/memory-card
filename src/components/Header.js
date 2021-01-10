import React from "react";

const Header = (props) => {
  const { title, currentScore, highScore } = props;

  return (
    <div>
      <div className="header-row row">
        <div className="col header-col">
          <h1 className="title text-center">{title}</h1>
        </div>
      </div>
      <div className="score-board">
        <ul>
          <li>current score: {currentScore}</li>
          <li>high score: {highScore}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
