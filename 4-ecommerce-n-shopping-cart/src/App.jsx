import './App.css'
import { products } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Filters } from './components/Filters.jsx'
import { useFilter } from './hooks/useFilter.js'

function App() {
  
  const { categoryChange, minpriceChange, filteredCategories, filteredProducts } = useFilter({ products })

  return (
    <>
      <header><h1>Shopping Cart 🛒 </h1></header>
      <Filters filteredCategories={filteredCategories} categoryChange={categoryChange} minpriceChange={minpriceChange}/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
