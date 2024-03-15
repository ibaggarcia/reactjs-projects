import './App.css'
import { Square } from './components/Board/Square.jsx'
import { WinnerModal } from './components/Board/WinnerModal.jsx'
import { Board } from './components/Board/Board.jsx'
import { Selector } from './components/Selector.jsx'
import { useGame } from './hooks/useGame.js'

function App() {

  const { score, board, turn, player, winner, newGame, updateCharacter, updateBoard, restartScore} = useGame()

  return (
    <div className='game'>
      <h1>Tic-Tac-Toe</h1>
      <Board score={score} board={board} updateBoard={updateBoard}/>
      <div className='footer'>
        <button className='restart' onClick={restartScore}>Reiniciar</button>
        <Square>{turn}</Square>
      </div>
      <WinnerModal winner={winner} newGame={newGame}/>
      <Selector player={player} updateCharacter={updateCharacter}/>
    </div>   
  )
}

export default App
