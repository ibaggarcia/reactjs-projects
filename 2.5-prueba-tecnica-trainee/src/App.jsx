import './App.css'
import { useFact } from './hooks/useFact.js'
import { useGIF } from './hooks/useGIF.js'

function App() {
  
  const { fact, refreshFact } = useFact()
  const { gifURLs, getSingleGIF, count } = useGIF({ fact })

  const handleClick = () => {
    refreshFact()
  }
  
  return (
    <main className='container'>
      <section className='text'>
        { fact && <h2>{fact}</h2> }
      </section>
      <section className='gif'>
        { gifURLs && <img src={gifURLs} alt="A random gift using the first 3 words of a random cat fact" /> }
      </section>
      <footer>
        <button onClick={handleClick}>Nuevo Fact</button>
        <button onClick={getSingleGIF}>Otro GIF {`(${count+1}/15)`}</button>
      </footer>
    </main>
  )
}

export default App
