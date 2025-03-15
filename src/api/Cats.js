/**
 * This file contains functions that fetch data from the Cataas API (Easy)
 * 
 * Not all functionality is implemented in this file, feel free to add more!
 * [https://cataas.com/]
 */

/**
 * Fetches a random cat image according to the tags provided
 * Providing no tags will return a random cat image
 * A list of valid tags can be fetched using the fetchCatTags function
 *
 * The function accepts an object with the following fields:
 * @param {boolean} isGif - whether to fetch a gif or an image - defaults to false
 * @param {string[]} tags - a list of tags to filter the image by - defaults to an empty array
 * @param {string} message - a message to display on the image - defaults to an empty string
 * @param {number} fontSize - the size of the font to use for the message - defaults to 100
 * @param {string} fontColour - the colour of the font to use for the message - defaults to red
 *
 * @returns a URL that can be used as a source for an image
 */
export async function fetchCat({
  isGif = false,
  tags = [],
  message,
  fontSize = 100,
  fontColour = "red"
} = {}) {
  const baseUrl = "https://cataas.com/cat";

  const gifUrlParam = isGif ? "/gif" : "";
  const tagsUrlParam = tags.length == 0 ? '' : '/' + tags.join(",");
  const messageUrlParam = message ? `/says/${message}?fontSize=${fontSize}&fontColor=${fontColour}` : "";

  const queryUrl = `${baseUrl}${gifUrlParam}${tagsUrlParam}${messageUrlParam}`;

  const response = await fetch(queryUrl);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

/**
 * Fetches a list of cat tags that can be used as an argument for the fetchCatImage function
 *
 * @returns
 */
export async function fetchCatTags() {
  const response = await fetch("https://cataas.com/api/tags");
  const data = await response.json();
  return data;
}
