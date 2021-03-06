import React from 'react'

const Square = ({val, onClick,isWinning}) => {
    return (
            <button style={{fontWeight:isWinning ? 'bold' : 'normal'}} type="button" 
            className={`square ${isWinning ? 'winning': ''} ${val==='X'?'text-green':'text-orange'}`} 
            onClick={onClick}>{val}</button>
    )
}

export default Square
