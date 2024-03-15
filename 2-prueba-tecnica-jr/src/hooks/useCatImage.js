import { useState, useEffect } from "react"
import { CAT_IMG_URL } from "../logic/endpoints"

export function useCatImage({ fact }) {
    const [catImage, setCatImage] = useState()
  
    useEffect(() => {
      const catText = fact.split(' ', 1)
      setCatImage(catText)
    }, [fact])
  
    return { catImage: `${CAT_IMG_URL}${catImage}?fontSize=30&fontColor=white`, imageTitle: `An image with a cat saying ${catImage}`}
  }