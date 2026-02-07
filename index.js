const {readdirSync} = require('fs');

module.exports = {
    country: {},
    data: {},
    imageData: {},
    imageBaseUrl: "https://raw.githubusercontent.com/476f6f6467616d6553747564696f73/E4K-data/main/images/",
    languages: {},
    network: {},
}

readdirSync(__dirname + '/country/').forEach(function (file) {
    module.exports.country[file.replace('.json', '')] = require('./country/' + file);
});

readdirSync(__dirname + '/data/').forEach(function (file) {
    let _data = require('./data/' + file);
    const _keys = Object.keys(_data);
    if (_keys.length === 1 && typeof _data[_keys[0]] === 'object') {
        _data = Array.isArray(_data[_keys[0]]) ? _data[_keys[0]] : [_data[_keys[0]]];
    }
    module.exports.data[file.replace('.json', '')] = _data;
});

module.exports.imageData = require('./images/x768.json');

readdirSync(__dirname + '/languages/').forEach(function (file) {
    module.exports.languages[file.replace('.json', '')] = require('./languages/' + file);
});

module.exports.network = require('./network/network.json');