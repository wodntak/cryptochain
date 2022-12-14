const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('jay')).toEqual('bfef4adc39f01b033fe749bb5f28f10b581fef319d34445d21a7bc63fe732fa3');
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
        .toEqual(cryptoHash('three','one','two'));
    });
});