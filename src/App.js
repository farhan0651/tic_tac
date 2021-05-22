import React,{useState} from "react";
import Board from './components/Board'
import History from './components/history'
import StatusMessage from './components/statusMessage'
import './style/root.scss'
import { calculateWinner } from "./winnerLogic";

const App=()=>{

    const [history,setHistory]=useState([{board:Array(9).fill(null),isNext: true}])
    const [currentMove,setCurrentMove]=useState(0);
    const current=history[currentMove];
    const winner=calculateWinner(current.board);
    console.log('history',history);   

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

  const moveTo=(move)=>{
    setCurrentMove(move);
  }

  return(
  <div className='app'>
    <h1>Tic Tac Toe</h1>
    <StatusMessage winner={winner} current={current} />
    <Board board={current.board} hadnleClick={hadnleClick} />
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
  </div>
  );
}

export default App;