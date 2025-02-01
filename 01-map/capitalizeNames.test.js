import { describe, expect, it } from 'vitest';
import capitalizeNames from './capitalizeNames';

describe('capitalizeNames', () => {
    it('should capitalize all names in the array', () => {
        const NAMES = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];

        const result = capitalizeNames(NAMES);

        expect(result).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
    });

    it('should handle an empty array', () => {
        const EMPTY_NAMES_LIST = [];

        const result = capitalizeNames(EMPTY_NAMES_LIST);

        expect(result).toEqual([]);
    });

    it('should handle names that are already capitalized correctly', () => {
        const CAPITALIZED_NAMES = ['John', 'Jacob', 'Jingleheimer', 'Schmidt'];

        const result = capitalizeNames(CAPITALIZED_NAMES);

        expect(result).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
    });

    it('should handle names that are all uppercase', () => {
        const UPPERCASED_NAMES = ['JOHN', 'JACOB', 'JINGLEHEIMER', 'SCHMIDT'];

        const result = capitalizeNames(UPPERCASED_NAMES);

        expect(result).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
    });

    it('should handle names that are all lowercase', () => {
        const LOWERCASED_NAMES = ['john', 'jacob', 'jingleheimer', 'schmidt'];

        const result = capitalizeNames(LOWERCASED_NAMES);

        expect(result).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
    });

    it('should handle names with mixed casing', () => {
        const MIXED_CAPITALIZED_NAMES = [
            'jOhN',
            'JaCoB',
            'jInGlEhEiMeR',
            'sChMiDt',
        ];

        const result = capitalizeNames(MIXED_CAPITALIZED_NAMES);

        expect(result).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
    });
});
