var config = {
    "env": "development",
    "development": {
        "username": "root",
        "password": "root",
        "database": "mydemodb",
        "host": "localhost",
        "dialect": "mysql",
        "pool": {
            "max": 100,
            "min": 0,
            "idle": 10000
        },
        "logging": false,
        "baseURL":"lvh.me:3010/",
        "protocolType":"http://",
    },
    "staging": {
        "username": "root",
        "password": "rejiya",
        "database": "mydemodb",
        "host": "localhost",
        "dialect": "mysql",
        "pool": {
            "max": 100,
            "min": 0,
            "idle": 10000
        },
        "logging": false,
        "baseURL":"lvh.me:3010/",
        "protocolType":"http://",
    },
    "production": {
        "username": "root",
        "password": "rejiya",
        "database": "mydemodb",
        "host": "localhost",
        "dialect": "mysql",
        "pool": {
            "max": 100,
            "min": 0,
            "idle": 10000
        },
        "logging": false,
        "baseURL":"lvh.me:3010/",
        "protocolType":"http://",
    },
}

module.exports = config;
