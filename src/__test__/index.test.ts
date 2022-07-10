import { execSops } from '../index';

describe('Sops command', () => {
    test('Check version', () => {
        expect(typeof execSops(['--version'])).toEqual('string');
    });
});
