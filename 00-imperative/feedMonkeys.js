// const MONKEYS = ["🐒", "🦍", "🦧"];

/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 */

/**
 * Feeds monkeys with the specified fruit.
 *
 * @param {string[]} monkeysList - An array of monkey names.
 * @param {string} fruit - The type of fruit to feed the monkeys.
 * @returns {string[]} An array of strings indicating each monkey has been fed with the specified fruit.
 */
export default function feedMonkeys(monkeysList, fruit) {
    const isEmoji = /^\p{Emoji}+$/u.test(fruit);

    if (!fruit || !isEmoji || typeof fruit !== 'string') {
        return [];
    }

    const newMonkeyList = [];
    const monketListLenght = monkeysList.length;

    for (let index = 0; index < monketListLenght; index++) {
        const monkey = monkeysList[index];
        const newMonkey = `${monkey}${fruit}`;

        newMonkeyList.push(newMonkey);
    }

    return newMonkeyList;
}
