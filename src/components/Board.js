import React from 'react'
import Square from './Square'

export const Board = ({board, hadnleClick,winningCombination}) => {


        const renderSquare=(position)=>{
        const isWinning=winningCombination.includes(position)
        return(
            <Square val={board[position]} onClick={()=>{
                hadnleClick(position);
            }} isWinning={isWinning} />
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