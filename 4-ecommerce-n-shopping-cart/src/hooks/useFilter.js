import { filterCategories, filterProducts} from '../logic/filters.js'
import { useState } from 'react'

export function useFilter({ products }) {
    const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0,
    })
  
    const categoryChange = eve => {
      eve.preventDefault()
  
      const category = eve.target.value
      setFilters(lastFilters => ({
        ...lastFilters,
        category: category
      }))
    }
  
    const minpriceChange = eve => {
      const minPrice = eve.target.value
      setFilters(lastFilters => ({
        ...lastFilters,
        minPrice: minPrice
      }))
    }
  
    const filteredCategories = filterCategories(products)
    const filteredProducts = filterProducts(products, {...filters})
  
    return { categoryChange, minpriceChange, filteredCategories, filteredProducts }
  }