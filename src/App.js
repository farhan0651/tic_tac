import React,{useState} from "react";
import Board from './components/Board'
import History from './components/history'
import StatusMessage from './components/statusMessage'
import './style/root.scss'
import { calculateWinner } from "./winnerLogic";

const App=()=>{

    const NewGame=[{board:Array(9).fill(null),isNext: true}]
    const [history,setHistory]=useState(NewGame)
    const [currentMove,setCurrentMove]=useState(0);
    const current=history[currentMove];
    const {winner,winningCombination}=calculateWinner(current.board);
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

  const onNewGame=()=>{
    setHistory(NewGame);
    setCurrentMove(0);
  }

  return(
  <div className='app'>
    <h1>Tic <span className="text-green">Tac</span> Toe</h1>
    <StatusMessage winner={winner} current={current} />
    <Board board={current.board} hadnleClick={hadnleClick} winningCombination={winningCombination}/>
    <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>
    <h2 style={{fontWeight:'normal'}}>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
    <div className="bg-balls"/>
  </div>
  );
}

export default App;