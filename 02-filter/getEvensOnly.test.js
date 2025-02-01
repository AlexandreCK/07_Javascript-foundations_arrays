import { describe, it, expect } from 'vitest';
import getEvensOnly from './getEvensOnly';

describe('getEvensOnly', () => {
    it('should return only even numbers from the array', () => {
        const NUMBERS = [2, 25, 43, 12, 67, 42, 28];

        expect(getEvensOnly(NUMBERS)).toEqual([2, 12, 42, 28]);
    });

    it('should handle an empty array', () => {
        const EMPTY_NUMBERS_LIST = [];

        expect(getEvensOnly(EMPTY_NUMBERS_LIST)).toEqual([]);
    });

    it('should handle an array with no even numbers', () => {
        const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];

        expect(getEvensOnly(NUMBERS_LIST_WITHOUT_EVEN_VALUES)).toEqual([]);
    });

    it('should handle an array with all even numbers', () => {
        const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];

        expect(getEvensOnly(NUMBERS_LIST_WITH_ALL_EVEN_VALUES)).toEqual([
            2, 4, 6, 8, 10,
        ]);
    });

    it('should handle an array with negative even numbers', () => {
        const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];

        expect(getEvensOnly(NUMBERS_LIST_WITH_NEGATIVE_VALUES)).toEqual([
            -2, -4, -6, -8, -10,
        ]);
    });

    it('should handle an array with mixed positive and negative even numbers', () => {
        const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];

        expect(getEvensOnly(NUMBERS_LIST_WITH_MIXED_VALUES)).toEqual([
            4, -6, 8, -10,
        ]);
    });
});
