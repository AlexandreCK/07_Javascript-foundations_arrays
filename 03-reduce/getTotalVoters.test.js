import { describe, it, expect } from 'vitest';
import getTotalVoters from './getTotalVoters';

describe('getTotalVoters', () => {
    it('should return the correct number of voters', () => {
        const VOTERS = [
            { name: 'Bob', age: 30, hasVoted: true },
            { name: 'Jake', age: 32, hasVoted: true },
            { name: 'Kate', age: 25, hasVoted: false },
            { name: 'Sam', age: 20, hasVoted: false },
            { name: 'Phil', age: 21, hasVoted: true },
            { name: 'Ed', age: 55, hasVoted: true },
            { name: 'Tami', age: 54, hasVoted: true },
            { name: 'Mary', age: 31, hasVoted: false },
            { name: 'Becky', age: 43, hasVoted: false },
            { name: 'Joey', age: 41, hasVoted: true },
            { name: 'Jeff', age: 30, hasVoted: true },
            { name: 'Zack', age: 19, hasVoted: false },
        ];

        expect(getTotalVoters(VOTERS)).toEqual(7);
    });

    it('should return 0 when no one has voted', () => {
        const NO_VOTERS = [
            { name: 'Kate', age: 25, hasVoted: false },
            { name: 'Sam', age: 20, hasVoted: false },
            { name: 'Mary', age: 31, hasVoted: false },
            { name: 'Becky', age: 43, hasVoted: false },
            { name: 'Zack', age: 19, hasVoted: false },
        ];

        expect(getTotalVoters(NO_VOTERS)).toEqual(0);
    });

    it('should return the correct number when all have voted', () => {
        const ALL_VOTERS = [
            { name: 'Bob', age: 30, hasVoted: true },
            { name: 'Jake', age: 32, hasVoted: true },
            { name: 'Phil', age: 21, hasVoted: true },
            { name: 'Ed', age: 55, hasVoted: true },
            { name: 'Tami', age: 54, hasVoted: true },
            { name: 'Joey', age: 41, hasVoted: true },
            { name: 'Jeff', age: 30, hasVoted: true },
        ];

        expect(getTotalVoters(ALL_VOTERS)).toEqual(7);
    });

    it('should handle an empty array', () => {
        const EMPTY_VOTERS = [];

        expect(getTotalVoters(EMPTY_VOTERS)).toEqual(0);
    });

    it('should handle an array with one voter who has voted', () => {
        const SINGLE_VOTER = [{ name: 'Bob', age: 30, hasVoted: true }];

        expect(getTotalVoters(SINGLE_VOTER)).toEqual(1);
    });

    it('should handle an array with one voter who has not voted', () => {
        const SINGLE_NON_VOTER = [{ name: 'Kate', age: 25, hasVoted: false }];

        expect(getTotalVoters(SINGLE_NON_VOTER)).toEqual(0);
    });
});
