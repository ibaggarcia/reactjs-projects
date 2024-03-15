import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"

export function useFact() {
    const [fact, setFact] = useState('Esto es un random fact')
  
    const refreshFact = async () => {
      const newFact = await getRandomFact()
      setFact(newFact)
    }
    
    useEffect(() => {
        refreshFact()
    }, [])
  
    return { fact, refreshFact }
  }