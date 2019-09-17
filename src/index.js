const disk = require('diskusage');
var uniqWith = require('lodash.uniqwith');


async function getDiskNode(device) {
    const result = await disk.check(device);

    return {
        title: device,
        children: [
            {
                title: 'free',
                children: [
                    {
                        title: 'available',
                        size: result.available
                    },
                    {
                        title: 'reserved',
                        size: (result.free - result.available)
                    }
                ],
                size: result.free
            },
            {
                title: 'used',
                size: (result.total - result.free)
            }
        ],
        size: result.total
    };
}

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

    let virtualRoot = {
        title: 'virtualRoot',
        children: []
    };

    for (const device of devices) {
        virtualRoot.children.push(await getDiskNode(device));
    }

    const uniqueArr = uniqWith(virtualRoot.children, (elem1, elem2) => {
        return elem1.title === elem2.title;
    });

    if (uniqueArr.length < virtualRoot.children.length)
        throw new Error('Device data already retrieved! "' + JSON.stringify(virtualRoot.children) + '"');

    return virtualRoot;
};