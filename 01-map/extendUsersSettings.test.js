import { describe, expect, it } from 'vitest';
import extendUsersSettings from './extendUsersSettings';

describe('extendUsersSettings', () => {
    it('should add id and isEnabled properties to each user', () => {
        const USERS = [
            {
                email: 'lindsay.ferguson@reqres.in',
                firstName: 'Lindsay',
                lastName: 'Lawson',
                avatar: 'https://reqres.in/img/faces/7-image.jpg',
            },
            {
                email: 'michael.lawson@reqres.in',
                firstName: 'Michael',
                lastName: 'Ferguson',
                avatar: 'https://reqres.in/img/faces/8-image.jpg',
            },
            {
                email: 'tobias.funke@reqres.in',
                firstName: 'Tobias',
                lastName: 'Funke',
                avatar: 'https://reqres.in/img/faces/9-image.jpg',
            },
        ];

        const extendedUsers = extendUsersSettings(USERS);

        expect(extendedUsers).toEqual([
            {
                email: 'lindsay.ferguson@reqres.in',
                firstName: 'Lindsay',
                lastName: 'Lawson',
                avatar: 'https://reqres.in/img/faces/7-image.jpg',
                id: 0,
                isEnabled: true,
            },
            {
                email: 'michael.lawson@reqres.in',
                firstName: 'Michael',
                lastName: 'Ferguson',
                avatar: 'https://reqres.in/img/faces/8-image.jpg',
                id: 1,
                isEnabled: true,
            },
            {
                email: 'tobias.funke@reqres.in',
                firstName: 'Tobias',
                lastName: 'Funke',
                avatar: 'https://reqres.in/img/faces/9-image.jpg',
                id: 2,
                isEnabled: true,
            },
        ]);
    });

    it('should handle an empty array', () => {
        const extendedUsers = extendUsersSettings([]);

        expect(extendedUsers).toEqual([]);
    });
});
