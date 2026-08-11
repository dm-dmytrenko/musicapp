export const PICSUM_API = {
  getRandomSquareEndpoint: (size = 500) => `https://picsum.photos/${size}`
};

export const WORD_API = {
  GET_WORDS: (count = 2) => `https://random-word-api.herokuapp.com/word?number=${count}`
};