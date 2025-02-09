// const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
// const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 */

const MIN_LENGTH = 5;

/**
 * Returns an array of strings with length equal or greater than 5.
 *
 * @param {string[]} wordsList - The array of words to filter.
 * @returns {string[]} An array containing words with length equal or greater than 5.
 */
export default function getLongWords(wordsList) {
    const longWords = [];
    const wordListLength = wordsList.length;

    for (let i = 0; i < wordListLength; i++) {
        if (wordsList[i].length >= MIN_LENGTH) {
            longWords.push(wordsList[i]);
        }
    }

    return longWords;
}
