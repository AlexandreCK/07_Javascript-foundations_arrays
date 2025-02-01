import { describe, expect, it } from 'vitest';
import feedMonkeys from './feedMonkeys';

const MONKEYS_LIST = ['🐒', '🦍', '🦧'];

describe('feedMonkeys', () => {
    it('should feed monkeys with bananas', () => {
        const banana = '🍌';

        const result = feedMonkeys(MONKEYS_LIST, banana);

        expect(result).toEqual(['🐒🍌', '🦍🍌', '🦧🍌']);
    });

    it('should feed monkeys with apples', () => {
        const apple = '🍎';

        const result = feedMonkeys(MONKEYS_LIST, apple);

        expect(result).toEqual(['🐒🍎', '🦍🍎', '🦧🍎']);
    });

    it('should feed monkeys with grapes', () => {
        const grape = '🍇';

        const result = feedMonkeys(MONKEYS_LIST, grape);

        expect(result).toEqual(['🐒🍇', '🦍🍇', '🦧🍇']);
    });

    it('should return an empty array if no fruit is provided', () => {
        const result = feedMonkeys(MONKEYS_LIST, '');

        expect(result).toEqual([]);
    });

    it('should handle feeding monkeys with special characters', () => {
        const specialCharacters = '🍉🍇';

        const result = feedMonkeys(MONKEYS_LIST, specialCharacters);

        expect(result).toEqual(['🐒🍉🍇', '🦍🍉🍇', '🦧🍉🍇']);
    });
});
