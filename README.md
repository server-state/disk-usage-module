# disk usage module

[![Build Status](https://travis-ci.com/server-state/disk-usage-module.svg?branch=master)](https://travis-ci.com/server-state/disk-usage-module)
![GitHub](https://img.shields.io/github/license/server-state/disk-usage-module)
[![npm version](https://badge.fury.io/js/%40server-state%2Fdisk-usage-module.svg)](https://badge.fury.io/js/%40server-state%2Fdisk-usage-module)
[![Coverage Status](https://coveralls.io/repos/github/server-state/disk-usage-module/badge.svg?branch=master)](https://coveralls.io/github/server-state/disk-usage-module?branch=master)
![module type: official](https://img.shields.io/badge/module%20type-official-%23015ba0)

A module to view the current disk space of devices in your system.

You can specify the moint points in the given options, for example:
```javascript
server.addModule('diskUsage', require('@server-state/disk-usage-module'), [
    '/'
]);
```

with the following output:
```json
{
 "title": "virtualRoot",
 "children": [
  {
   "title": "/",
   "children": [
    {
     "title": "free",
     "children": [
      {
       "title": "available",
       "size": 26725240832
      },
      {
       "title": "reserved",
       "size": 3452747776
      }
     ],
     "size": 30177988608
    },
    {
     "title": "used",
     "size": 36926201856
    }
   ],
   "size": 67104190464
  }
 ]
}
```
The output is specified in [data formats](https://github.com/server-state/specs/blob/master/arch/data-formats.md).

The output generates a straight base to provide other applications useful information like server-states example [client-base](https://github.com/server-state/client-base).

This official module belongs to the organization [server-state](https://github.com/server-state).
