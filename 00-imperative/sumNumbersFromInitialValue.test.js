import { describe, expect, it } from 'vitest';
import sumNumbersFromInitialValue from './sumNumbersFromInitialValue';

describe('sumNumbersFromInitialValue', () => {
    it('should return the correct sum with initial value 0', () => {
        const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];

        const initialAccumulatedValueAsZero = 0;

        const result = sumNumbersFromInitialValue(
            POSITIVE_NUMBERS_LIST,
            initialAccumulatedValueAsZero,
        );

        expect(result).toEqual(15);
    });

    it('should return the correct sum with initial value 10', () => {
        const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];

        const initialAccumulatedValueAsTen = 10;

        const result = sumNumbersFromInitialValue(
            POSITIVE_NUMBERS_LIST,
            initialAccumulatedValueAsTen,
        );

        expect(result).toEqual(25);
    });

    it('should return the initial value if the list is empty', () => {
        const EMPTY_NUMBERS_LIST = [];

        const initialAccumulatedValueAsZero = 0;

        const result = sumNumbersFromInitialValue(
            EMPTY_NUMBERS_LIST,
            initialAccumulatedValueAsZero,
        );

        expect(result).toEqual(0);
    });

    it('should handle negative numbers in the list', () => {
        const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];

        const initialAccumulatedValueAsZero = 0;

        const result = sumNumbersFromInitialValue(
            NEGATIVE_NUMBERS_LIST,
            initialAccumulatedValueAsZero,
        );

        expect(result).toEqual(-15);
    });

    it('should handle a mix of positive and negative numbers', () => {
        const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

        const initialAccumulatedValueAsZero = 0;

        const result = sumNumbersFromInitialValue(
            MIXED_NUMBERS_LIST,
            initialAccumulatedValueAsZero,
        );

        expect(result).toEqual(3);
    });

    it('should handle an initial value of 0', () => {
        const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

        const initialAccumulatedValueAsZero = 0;

        const result = sumNumbersFromInitialValue(
            MIXED_NUMBERS_LIST,
            initialAccumulatedValueAsZero,
        );

        expect(result).toEqual(3);
    });

    it('should handle an initial value of 100', () => {
        const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

        const initialAccumulatedValueAsOneHundred = 100;

        const result = sumNumbersFromInitialValue(
            MIXED_NUMBERS_LIST,
            initialAccumulatedValueAsOneHundred,
        );

        expect(result).toEqual(103);
    });
});
