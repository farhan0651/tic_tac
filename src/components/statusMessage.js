import React from 'react'

const statusMessage = ({winner,current}) => {

    const noMovesLeft=current.board.every((el)=> el!=null)

    return (
        <h2>
            {winner && `Winner is ${winner}`}
            {!winner && !noMovesLeft && `Next player is ${current.isNext ? 'X': 'O'}`}
            {!winner && noMovesLeft && 'Game Tie'}
        </h2>
    )
}

export default statusMessage
