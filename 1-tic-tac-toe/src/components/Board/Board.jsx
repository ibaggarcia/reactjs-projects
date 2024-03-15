import { Square } from "./Square"

export function Board({ score, board, updateBoard }) {
    return (
    <section className='board'>
        <h3>{score[0]} - {score[1]}</h3>
        <div className='box'>
        {
            board.map((_, index) => (
            <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
            >
                {board[index]}
            </Square>
            ))
        }
        </div>   
    </section>
  )
}