export  const filterCategories = products => {
    const categories = products.map(product => product.category)
    
    return [... new Set(categories)] 
  }

export const filterProducts = (products, filters) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && 
        (product.category === filters.category ||
        filters.category === 'all')
    })
  }