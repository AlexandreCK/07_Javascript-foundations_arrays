import { describe, it, expect } from 'vitest';
import createLocalesSettings from './createLocalesSettings';

describe('createLocalesSettings', () => {
    it('should create locales settings with the first locale enabled and the rest disabled', () => {
        const LOCALES = ['EN', 'GR', 'FR', 'IT', 'PT'];

        const expected = {
            EN: { id: 0, enabled: true },
            GR: { id: 1, enabled: false },
            FR: { id: 2, enabled: false },
            IT: { id: 3, enabled: false },
            PT: { id: 4, enabled: false },
        };

        expect(createLocalesSettings(LOCALES)).toEqual(expected);
    });

    it('should handle an empty array', () => {
        const EMPTY_LOCALES = [];

        expect(createLocalesSettings(EMPTY_LOCALES)).toEqual({});
    });

    it('should handle an array with one locale', () => {
        const SINGLE_LOCALE = ['EN'];

        const expected = {
            EN: { id: 0, enabled: true },
        };

        expect(createLocalesSettings(SINGLE_LOCALE)).toEqual(expected);
    });

    it('should handle an array with duplicate locales', () => {
        const DUPLICATE_LOCALES = ['EN', 'EN', 'FR', 'FR'];

        const expected = {
            EN: { id: 1, enabled: false },
            FR: { id: 3, enabled: false },
        };

        expect(createLocalesSettings(DUPLICATE_LOCALES)).toEqual(expected);
    });
});
