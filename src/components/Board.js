import React,{useState} from 'react'
import Square from './Square'

export const Board = () => {

    const [board,setBoard]=useState(Array(9).fill(null))
    const [nextPlayer,seNextPlayer]=useState(false);
    console.log(board);

    const hadnleClick=(position)=>{
        if(board[position]){
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

    const renderSquare=(position)=>{
        return(
            <Square val={board[position]} onClick={()=>{
                hadnleClick(position);
            }} />
        );
    }

    return (
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board