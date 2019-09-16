const serverModule = require('../src');
const os = require('os');

const testDevice = os.platform() === 'win32' ? 'c:' : '/';

describe('Test basic module functions', () => {
    it('should reject when no devices are specified', () => {
        expect(serverModule()).rejects.toThrow();
    });

    it('should reject when same device given twice', () => {
        expect(serverModule([testDevice, testDevice])).rejects.toThrow();
    });

    it('should retrieve device data correctly', () => {
        expect(serverModule([testDevice])).resolves.toBeTruthy();
    });
});