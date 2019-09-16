const disk = require('diskusage');

/**
 * A module for the server-state system
 * 
 * get usage of defined devices in a system
 * 
 * @throws if no devices get passed to the function
 * @throws if a device gets passed two or more times
 * 
 * @argument options array of mount points to get usage
 * @returns {object|array|string|number|boolean} A JSON-serializable (via `JSON.stringify()`) version information about the server state
 */
module.exports = async function(devices) {
    if (!devices || !devices.length) {
        throw new Error('No devices were specified!');
    }

    const result = {};
    for (const device of devices) {
        if (result[device])
            throw new Error('Device data already retrieved! "${device}"');
        result[device] = await disk.check(device);
    }

    return result;
};