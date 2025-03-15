import React, { useEffect, useState } from 'react'
import { fetchDeck, fetchCard } from '../api/DeckOfCards'

const DeckOfCards = () => {
  const [deckData, setDeckData] = useState(null)
  const [drawnCards, setDrawnCards] = useState([])
  const [remainingCards, setRemainingCards] = useState(52)

  const getNewDeck = async () => {
    fetchDeck().then((deck) => {
      console.log(deck)
      setDeckData(deck)
      setRemainingCards(deck.remaining)
    })
  }

  const drawFromDeck = async (deckId) => {
    fetchCard(deckId).then((cards) => {
      console.log(cards)
      setDrawnCards([...drawnCards, ...cards.cards])
      setRemainingCards(cards.remaining)
    })
  }

  useEffect(() => {
    getNewDeck()
  }, [])

  return (
    <div>
      <h1>Deck of Cards</h1>
      {deckData && <p>Deck ID: {deckData.deck_id}</p>}
      {deckData && <p>Remaining cards: {remainingCards}</p>}

      {deckData && <button onClick={() => drawFromDeck(deckData.deck_id)}>Draw from deck</button>}
      {drawnCards.length > 0 && <h2>Drawn cards:</h2>}

      {drawnCards.map((card, index) => (
        <img key={index} src={card.image} alt={card.code} />
      ))}
    </div>
  )
}

export default DeckOfCards