import { describe, expect, it } from 'vitest';
import transformSecondsToWords from './transformSecondsToWords';

describe('transformSecondsToWords', () => {
    it('should transform an array of seconds to an array of strings', () => {
        const SECONDS = [2, 5, 100];

        const result = transformSecondsToWords(SECONDS);

        expect(result).toEqual(['2', '5', '100']);
    });

    it('should handle an empty array', () => {
        const EMPTY_SECONDS_LIST = [];

        const result = transformSecondsToWords(EMPTY_SECONDS_LIST);

        expect(result).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const SINGLE_SECOND_LIST = [42];

        const result = transformSecondsToWords(SINGLE_SECOND_LIST);

        expect(result).toEqual(['42']);
    });

    it('should handle an array with zero', () => {
        const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];

        const result = transformSecondsToWords(
            SINGLE_SECONDS_LIST_WITH_VALUE_ZERO,
        );

        expect(result).toEqual(['0']);
    });

    it('should handle an array with negative numbers', () => {
        const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];

        const result = transformSecondsToWords(
            SECONDS_LIST_WITH_NEGATIVE_VALUES,
        );

        expect(result).toEqual(['-1', '-60', '-3600']);
    });
});
