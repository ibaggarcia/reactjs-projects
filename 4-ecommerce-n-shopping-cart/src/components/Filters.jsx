import './Filters.css'

export function Filters({ filteredCategories, categoryChange, minpriceChange}) {
    return (
        <section className='filters'>
        <h3>Filtrar</h3>
        <div className='category-filter'>
          <h4>Categoría</h4>
          <select onChange={categoryChange} name="category">
            <option value="all">All</option>
            {
              filteredCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div className='minprice-filter'>
        <h4>Precio mínimo</h4>
          <select name="minprice" onChange={minpriceChange}>
            <option value="0">0</option>
            <option value="200">200</option>
            <option value="500">500</option>
            <option value="800">800</option>
            <option value="1000">1000</option>
          </select>
        </div>
      </section>
    )
}