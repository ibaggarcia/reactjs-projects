import './App.css'
import { useFact } from './hooks/useFact.js'
import { useCatImage } from './hooks/useCatImage.js'

function App() {

  const { fact, refreshFact } = useFact()
  const { catImage, imageTitle } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main className='container'>
      <section>
        <h2>{fact}</h2>
      </section>
      <aside>
        <img src={catImage} alt='An image of a cat saying something' title={imageTitle} />
      </aside>
      <footer>
        <button onClick={handleClick}>Mostrar otro</button>
      </footer>
    </main>
  )
}

export default App;