// const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use map()
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

/**
 * Feeds a list of monkeys with a specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings where each string represents a monkey being fed with the specified fruit.
 */
export default function feedMonkeys(monkeysList, fruit) {
    const isEmoji = /^\p{Emoji}+$/u.test(fruit);

    if (!fruit || !isEmoji || typeof fruit !== 'string') {
        return [];
    }

    return monkeysList.map((monkey) => `${monkey}${fruit}`);
}
