import React,{useState} from "react";
import Board from './components/Board'
import './style/root.scss'
import { calculateWinner } from "./winnerLogic";

const App=()=>{

    // const [board,setBoard]=useState(Array(9).fill(null))
    // const [nextPlayer,seNextPlayer]=useState(false);
    const [history,setHistory]=useState([{board:Array(9).fill(null),isNext: true}])
    const [currentMove,setCurrentMove]=useState(0);
    const current=history[currentMove];
    const winner=calculateWinner(current.board);
    console.log('history',history);  

    const message= winner 
        ? `Winner is ${winner}` 
        : `Next player is ${current.isNext ? 'X':'O'}`; 

    const hadnleClick=(position)=>{
        if(current.board[position] || winner){
            return;
        }

        setHistory((prev)=>{
        const last=prev[prev.length-1];
        const newBoard=
          last.board.map((updatedState,pos)=>{
                if(pos===position)
                    return last.isNext ? 'X':'O';
                return updatedState;
            });
            return prev.concat({board:newBoard,isNext:!last.isNext});
        });
    
    setCurrentMove(prev=>prev+1);
        
    };

  return(
  <div className='app'>
    <h1>Tic Tac Toe</h1>
    <h3>{message}</h3>
    <Board board={current.board} hadnleClick={hadnleClick} />
  </div>
  );
}

export default App;