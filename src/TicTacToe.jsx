
import React from 'react';
import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Button from '@mui/material/Button';

export function TicTacToe() { 

  const { width, height } = useWindowSize();

  const [board, setBoard] =useState(Array(9).fill(null));

  const [isXturn, setTurn]=useState(true);

  const handleClick = (index) =>{

    if(!winner && board[index]===null){
    const boardcopy = [...board]; //copy,
    boardcopy[index]=isXturn ? 'X':'O'; //set the value in index,
    setBoard(boardcopy); //Update  board.

    //alternate x > o, o > x or toggle
    setTurn(!isXturn);
  }
};

const decideWinner = ()=>
{
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,3,6]
  ];

  for(let i =0; i<lines.length; i++){
    const[a, b, c]=lines[i];
    if(board[a]!==null && board[a]===board[b] && board[b]===board[c]) {
    console.log("winner :",board[a],)
    return board[a];
  }
}
return null;
};

const winner =decideWinner(board);

const resetGame = ()=>{
  setBoard(Array(9).fill(null));
  setTurn(true);

}

  return (
    <div className='Tic-tac-toe'>
      {winner?<Confetti
      width={width}
      height={height}
      gravity={0.1}
    />:null}
      <h1>Tic Tac Toe</h1>
    <div className='board-box'>
   {board.map((value, index)=> <Gamebox val={value} onPlayer={()=>handleClick(index)} />)}
   </div>
  {winner? <h2>Winner : {winner}</h2>:null}
  <Button variant="contained" color='error' type='submit' onClick={() => {resetGame()}}>Reset</Button>
    </div>
  );
}
function Gamebox({val, onPlayer}){

  const styles={
    color: val ==='X' ? 'green':'red'
  };
  
  return(
    <div>
      <div style={styles} className='game-box' onClick={onPlayer}>{val}</div>
    </div>
  )
}
