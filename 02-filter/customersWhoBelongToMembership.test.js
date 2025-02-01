import { describe, expect, it } from 'vitest';
import customersWhoBelongToMembership from './customersWhoBelongToMembership';

describe('customersWhoBelongToMembership', () => {
    it('should return only customers who are members', () => {
        const CUSTOMERS_LIST = [
            { name: 'Foo', isMember: true },
            { name: 'Bar', isMember: false },
            { name: 'Fizz', isMember: true },
            { name: 'Buzz', isMember: false },
            { name: 'FizzBuzz', isMember: true },
        ];

        const result = customersWhoBelongToMembership(CUSTOMERS_LIST);

        expect(result).toEqual([
            { name: 'Foo', isMember: true },
            { name: 'Fizz', isMember: true },
            { name: 'FizzBuzz', isMember: true },
        ]);
    });

    it('should handle an empty array', () => {
        const EMPTY_CUSTOMERS_LIST = [];

        const result = customersWhoBelongToMembership(EMPTY_CUSTOMERS_LIST);

        expect(result).toEqual([]);
    });

    it('should handle an array with no members', () => {
        const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
            { name: 'Bar', isMember: false },
            { name: 'Buzz', isMember: false },
        ];

        const result = customersWhoBelongToMembership(
            CUSTOMERS_LIST_WITH_NO_MEMBERS,
        );

        expect(result).toEqual([]);
    });

    it('should handle an array with all members', () => {
        const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
            { name: 'Foo', isMember: true },
            { name: 'Fizz', isMember: true },
            { name: 'FizzBuzz', isMember: true },
        ];

        const result = customersWhoBelongToMembership(
            CUSTOMERS_LIST_WITH_ALL_MEMBERS,
        );

        expect(result).toEqual([
            { name: 'Foo', isMember: true },
            { name: 'Fizz', isMember: true },
            { name: 'FizzBuzz', isMember: true },
        ]);
    });
});
