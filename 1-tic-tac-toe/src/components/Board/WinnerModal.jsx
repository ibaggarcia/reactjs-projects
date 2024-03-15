import { Square } from "./Square.jsx"

export function WinnerModal({ winner, newGame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : `El ganador es ${winner}`
    const winnerIcon = winner ? winner : '='

    return(
        <div className='modal-winner'>
          <section className='winner'>
            <Square>{winnerIcon}</Square>
            <div className='text'>
              <h2>{winnerText}</h2>
            </div>
            <button className='newgame' onClick={newGame}>Nueva partida</button>
          </section>
        </div>
    )
}
