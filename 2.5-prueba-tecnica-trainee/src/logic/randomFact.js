import { CAT_FACT_ENDPOINT } from "../source/endpoints"

export const getRandomFact = async () => {
    const res = await fetch(CAT_FACT_ENDPOINT)
    const data = await res.json()

    const { fact } = data
    return fact ?? 'Otro fact random'
  }