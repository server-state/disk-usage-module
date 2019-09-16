const os = require('os');

const testDevice = os.platform() === 'win32' ? 'c:' : '/';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

describe('Validity of return value of function', () => {
    test('JSON serializable', async (done) => {
        const res = await (require('../src/')([testDevice]));

        expect(JSON.stringify(res)).toBeTruthy();
        done();
    });
});