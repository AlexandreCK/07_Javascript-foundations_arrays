// const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const MAX_LENGTH = 5;

/**
 * Extracts countries with names that have five characters or fewer.
 *
 * @param {string[]} countriesList - An array of country names.
 * @returns {string[]} An array of country names that have five characters or fewer.
 */
export default function extractCountriesWithFiveCharactersOrFewer(
    countriesList,
) {
    return countriesList.filter((country) => country.length <= MAX_LENGTH);
}
