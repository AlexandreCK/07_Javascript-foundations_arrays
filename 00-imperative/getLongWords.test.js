import { describe, expect, it } from 'vitest';
import getLongWords from './getLongWords';

describe('getLongWords', () => {
    it('should return long words from LANGUAGES array', () => {
        const LANGUAGES = ['Java', 'C++', 'JavaScript', 'C#', 'TypeScript'];

        const result = getLongWords(LANGUAGES);

        expect(result).toEqual(['JavaScript', 'TypeScript']);
    });

    it('should return long words from BEATLES array', () => {
        const BEATLES = ['John', 'George', 'Paul', 'Ringo'];

        const result = getLongWords(BEATLES);

        expect(result).toEqual(['George', 'Ringo']);
    });

    it('should return an empty array if no words are long enough', () => {
        const SHORT_WORDS = ['a', 'bb', 'ccc', 'dddd'];

        const result = getLongWords(SHORT_WORDS);

        expect(result).toEqual([]);
    });

    it('should return the same array if all words are long enough', () => {
        const LONG_WORDS = [
            'aaaaaaaa',
            'bbbbbbbbbb',
            'ccccccccccc',
            'dddddddddd',
        ];

        const result = getLongWords(LONG_WORDS);

        expect(result).toEqual([
            'aaaaaaaa',
            'bbbbbbbbbb',
            'ccccccccccc',
            'dddddddddd',
        ]);
    });

    it('should handle an empty input array', () => {
        const EMPTY_ARRAY = [];

        const result = getLongWords(EMPTY_ARRAY);

        expect(result).toEqual([]);
    });

    it('should handle an array with mixed length word', () => {
        const MIXED_LENGTH_WORDS = ['short', 'tiny', 'adequate', 'sufficient'];

        const result = getLongWords(MIXED_LENGTH_WORDS);

        expect(result).toEqual(['short', 'adequate', 'sufficient']);
    });
});
