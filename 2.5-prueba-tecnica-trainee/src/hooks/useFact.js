import { useState, useEffect } from "react"
import { getRandomFact } from "../logic/randomFact"

export function useFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
      getRandomFact().then(fact => setFact(fact))
    }
  
    useEffect(refreshFact, [])
  
    return { fact, refreshFact }
  }