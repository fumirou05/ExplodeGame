import React, { useState } from 'react';
import styled from 'styled-components';
import StartWindow from './components/StartWindow';
import GameWindow from './components/GameWindow';

const GameArea = styled.div`
  background-color: lightgreen;
  width: 400px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// 爆弾の数
const bombNum = 12;

const App: React.FC = () => {
  const [ingame, setIngame] = useState<boolean>(false);
  const [board, setBoard] = useState<number[]>([]);
  const handleStart = () => {
    setIngame(true);
    const index = Math.floor(Math.random()*12);
    const genBoard = [...Array(bombNum)].map(() => 0);
    genBoard[index] = 1;
    setBoard(genBoard);
  };
  return (
    <GameArea>
      {!ingame && <StartWindow ingame={ingame} onClick={handleStart} />}
      {ingame && <GameWindow board={board} />}
    </GameArea>
  );
}


export default App;