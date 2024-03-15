import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                         <img src={product.thumbnail} alt={product.decription}/>
                         <span><strong>{product.title}</strong> - {product.price}$</span>
                         <button>
                            <AddToCartIcon />
                         </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}