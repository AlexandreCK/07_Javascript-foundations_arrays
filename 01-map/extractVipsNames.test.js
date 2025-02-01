import { describe, expect, it } from 'vitest';
import extractVipsNames from './extractVipsNames';

describe('extractVipsNames', () => {
    it('should extract names from VIPS array', () => {
        const VIPS = [
            { name: 'Foo', age: 80 },
            { name: 'Bar', age: 2 },
            { name: 'Fizz', age: 5 },
            { name: 'Buzz', age: 16 },
            { name: 'FizzBuzz', age: 100 },
        ];

        const result = extractVipsNames(VIPS);

        expect(result).toEqual(['Foo', 'Bar', 'Fizz', 'Buzz', 'FizzBuzz']);
    });

    it('should handle an empty array', () => {
        const EMPTY_VIPS_LIST = [];

        const result = extractVipsNames(EMPTY_VIPS_LIST);

        expect(result).toEqual([]);
    });

    it('should handle an array with one VIP', () => {
        const SINGLE_VIP_LIST = [{ name: 'Foo', age: 80 }];

        const result = extractVipsNames(SINGLE_VIP_LIST);

        expect(result).toEqual(['Foo']);
    });

    it('should handle VIPs with different ages', () => {
        const VIPS = [
            { name: 'Foo', age: 80 },
            { name: 'Bar', age: 2 },
            { name: 'Fizz', age: 5 },
            { name: 'Buzz', age: 16 },
            { name: 'FizzBuzz', age: 100 },
        ];

        const result = extractVipsNames(VIPS);

        expect(result).toEqual(['Foo', 'Bar', 'Fizz', 'Buzz', 'FizzBuzz']);
    });
});
