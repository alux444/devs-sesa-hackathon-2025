import { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import Cats from "./components/Cats";
import DeckOfCards from "./components/DeckOfCards";
import CounterExample from "./components/CounterExample";

function App() {
  const [currentPage, setCurrentPage] = useState("cats");

  return (
    <>
      <h1>
        <span className="gradientTextPurple">DEVS</span> 
        {" x "}
        <span className="gradientTextGreen">SESA</span>
        {" "}Hackathon 2025
      </h1>

      <div className="flexGapStyle">
        <button onClick={() => setCurrentPage("cats")}>Cats</button>
        <button onClick={() => setCurrentPage("deckOfCards")}>Deck of Cards</button>
        <button onClick={() => setCurrentPage("pokemon")}>Pokemon</button>
        <button onClick={() => setCurrentPage("counterExample")}>Counter Example</button>
      </div>

      <h2>Current page: {currentPage}</h2>

      {currentPage === "cats" && <Cats />}
      {currentPage === "deckOfCards" && <DeckOfCards />}
      {currentPage === "pokemon" && <Pokemon />}
      {currentPage === "counterExample" && <CounterExample />}
    </>
  );
}

export default App;
