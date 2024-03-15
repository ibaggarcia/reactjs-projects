import { useState } from "react"
import { TURNS } from "../logic/constants"
import { checkWinner } from "../logic/board"
import confetti from "canvas-confetti"

export function useGame() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState('')
    const [winner, setWinner] = useState(null)
    const [score, setScore] = useState([0, 0])
    const [player, setPlayer] = useState(1)
  
    const newGame = () => {
      setWinner(null)
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      setBoard(Array(9).fill(null))
    }
  
    const restartScore = () => {
      setScore([0, 0])
      newGame()
      setPlayer(1)
    }
  
    const updateBoard = (index) => {
      if (board[index] || winner) return
  
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      
      const isItWinner = checkWinner(newBoard)
      if (isItWinner !== null) {
        if (isItWinner !== false) {
          const newScore = score 
          isItWinner === TURNS.X ? newScore[0]++ : newScore[1]++
          setScore(newScore)
          confetti({ particleCount: 150, spread: 200 })
        }
        setWinner(isItWinner)
      }
  
      if (isItWinner === null) {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
      } 
    }
  
    const updateCharacter = (emoji) => {    
      const selectTurn = player + 1
      if (selectTurn === 2) TURNS.X = emoji
      else if (selectTurn === 3) TURNS.O = emoji
      console.log(TURNS.O)
      setPlayer(selectTurn)
      setTurn(TURNS.X)
    }
  
    return { score, board, turn, player, winner, newGame, updateCharacter, updateBoard, restartScore}
  }