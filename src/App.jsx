import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon'
import Cats from './components/Cats'
import DeckOfCards from './components/DeckOfCards'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState("cats");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <button onClick={() => setCurrentPage("cats")}>Cats</button>
      <button onClick={() => setCurrentPage("pokemon")}>Pokemon</button>
      <button onClick={() => setCurrentPage("deckOfCards")}>Deck of Cards</button>

      <h2>Current page: {currentPage}</h2>

      {currentPage === "cats" && <Cats />}
      {currentPage === "pokemon" && <Pokemon />}
      {currentPage === "deckOfCards" && <DeckOfCards />}
    </>
  )
}

export default App
