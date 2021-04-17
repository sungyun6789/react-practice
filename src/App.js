import React from 'react';
import Header from './practical-react/component/Header';
import AboveGame from './practical-react/component/AboveGame';
import Game from './practical-react/component/Game';

export default function App() {
  return (
    <div className="container">
      <Header />
      <AboveGame />
      <Game />
    </div>
  );
}
