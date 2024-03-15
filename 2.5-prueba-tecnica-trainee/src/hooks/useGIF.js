import { useState, useEffect } from "react"
import { getGIFs } from "../logic/GIF"

export function useGIF({ fact }) {
    const [gifURLs, setGifURLs] = useState([null])
    const [count, setCount] = useState(0)

    const getSingleGIF = () => {
      const newCount = count + 1
      setCount(newCount)
    }

    useEffect(() => {
      if (!fact) return
      
      setCount(0)
      const shortFact = fact.split(' ', 3).join(' ')
      getGIFs({ shortFact }).then(urls => setGifURLs(urls))
    }, [fact])
  
    return { gifURLs: gifURLs[count], getSingleGIF, count }
  }