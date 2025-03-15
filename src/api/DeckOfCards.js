/**
 * This file contains functions that fetch data from the Deck of Cards API (Medium)
 * 
 * Not all functionality is implemented in this file, feel free to add more!
 * [https://deckofcardsapi.com/]
 */

/**
 * This endpoint fetches a new shuffled deck
 * 
 * @param {number} deckCount - the number of decks to shuffle together
 * 
 * @returns json object containing the deck data
 */
export async function fetchDeck(deckCount = 1) {
  const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=" + deckCount);
  const data = await response.json();
  return data;
}

/**
 * This endpoint fetches card(s) from a deck given an id
 * 
 * @param {string} deckId - the id of the deck to draw from
 * @param {number} cardsToDraw - the number of cards to draw
 * @returns 
 */
export async function fetchCard(deckId, cardsToDraw = 1) {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardsToDraw}`);
  const data = await response.json();
  return data;
}

/**
  * This endpoint shuffles a deck given an id
 * 
 * @param {string} deckId - the id of the deck to shuffle
 * @returns 
 */
export async function shuffleDeck(deckId) {
  // &remaining=true is a parameter that tells the API to only shuffle the remaining cards in the deck
  // this means that if you have piles in the deck, the cards in the piles will not be shuffled
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=true`);
  const data = await response.json();
  return data;
}

/**
 * This endpoint adds a card to a new pile in a deck
 * 
 * @param {*} deckId - the id of the deck to add the card to
 * @param {*} pileName - the name of the pile to add the card to
 * @param {*} cardCode - the code of the card to add to the pile, e.g 'AS' for Ace of Spades
 * @returns 
 */
export async function addCardToPile(deckId, pileName, cardCode) {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=${cardCode}`);
  const data = await response.json();
  return data;
}

/**
 * This endpoint lists the cards from a pile in a deck
 * 
 * @param {*} deckId - the id of the deck to list the cards from
 * @param {*} pileName - the name of the pile to list the cards from
 * @returns 
 */
export async function listCardsInPile(deckId, pileName) {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/list/`);
  const data = await response.json();
  return data;
}