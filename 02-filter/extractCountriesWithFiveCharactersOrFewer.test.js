import { describe, expect, it } from 'vitest';
import extractCountriesWithFiveCharactersOrFewer from './extractCountriesWithFiveCharactersOrFewer';

describe('extractCountriesWithFiveCharactersOrFewer', () => {
    it('should return countries with five characters or fewer', () => {
        const COUNTRIES_WITH_MIXED_LENGTH = [
            'United Kingdom',
            'Italy',
            'France',
            'Portugal',
            'Greece',
        ];

        const result = extractCountriesWithFiveCharactersOrFewer(
            COUNTRIES_WITH_MIXED_LENGTH,
        );

        expect(result).toEqual(['Italy']);
    });

    it('should handle an empty array of countries', () => {
        const EMPTY_COUNTRIES_ARRAY = [];

        const result = extractCountriesWithFiveCharactersOrFewer(
            EMPTY_COUNTRIES_ARRAY,
        );

        expect(result).toEqual([]);
    });

    it('should handle an array with no countries having five characters or fewer', () => {
        const COUNTRIES_WITH_NO_SHORT_NAMES = [
            'United Kingdom',
            'Portugal',
            'Greece',
        ];

        const result = extractCountriesWithFiveCharactersOrFewer(
            COUNTRIES_WITH_NO_SHORT_NAMES,
        );

        expect(result).toEqual([]);
    });

    it('should handle an array with all countries having five characters or fewer', () => {
        const COUNTRIES_WITH_ALL_SHORT_NAMES = ['Italy', 'Spain', 'Japan'];

        const result = extractCountriesWithFiveCharactersOrFewer(
            COUNTRIES_WITH_ALL_SHORT_NAMES,
        );

        expect(result).toEqual(['Italy', 'Spain', 'Japan']);
    });
});
