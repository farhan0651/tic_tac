import React,{useState} from "react";
import Board from './components/Board'
import './style/root.scss'
import { calculateWinner } from "./winnerLogic";

const App=()=>{

    const [board,setBoard]=useState(Array(9).fill(null))
    const [nextPlayer,seNextPlayer]=useState(false);
    const winner=calculateWinner(board);

    const message= winner 
        ? `Winner is ${winner}` 
        : `Next player is ${nextPlayer ? 'X':'O'}`; 

    const hadnleClick=(position)=>{
        if(board[position] || winner){
            return;
        }

        setBoard((prev)=>{
            return prev.map((updatedState,pos)=>{
                if(pos===position)
                    return nextPlayer ? 'X':'O';
                return updatedState;
            });
        });
    
    seNextPlayer((prev)=>!prev);
        
    };

  return(
  <div className='app'>
    <h1>Tic Tac Toe</h1>
    <h3>{message}</h3>
    <Board board={board} hadnleClick={hadnleClick} />
  </div>
  );
}

export default App;