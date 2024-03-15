import { GIPHY_ENDPOINT } from "../source/endpoints.js"
import { GIPHY_API_KEY } from '../source/api_keys.js'
import { ERROR_GIF } from "../source/others"
import { getURLS } from "./URLs.js"

export const getGIFs = async ({ shortFact }) => {
    const res = await fetch(`${GIPHY_ENDPOINT}${GIPHY_API_KEY}&q=${shortFact}&limit=15`)
    const data = await res.json()
  
    const urls = getURLS({ gifs: data.data })
    return urls ?? ERROR_GIF
  }