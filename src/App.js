import React, { useState, useEffect } from 'react';
import Header from './practical-react/2048-game/component/Header';
import AboveGame from './practical-react/2048-game/component/AboveGame';
import Game from './practical-react/2048-game/component/Game';
import useLocalStorageNumber from './practical-react/hook/useLocalStorageNumber';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
