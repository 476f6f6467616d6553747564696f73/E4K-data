const {readdirSync} = require('fs');

module.exports = {
    country: {},
    data: {},
    imageDataX384: {},
    imageData: {},
    imageBaseUrl: "https://raw.githubusercontent.com/476f6f6467616d6553747564696f73/E4K-data/main/images/",
    imageBaseUrlDev: "https://raw.githubusercontent.com/476f6f6467616d6553747564696f73/E4K-data/develop/images/",
    languages: {},
    network: {},
    networkPreClient: {},
}

readdirSync(__dirname + '/country/').forEach(function (file) {
    module.exports.country = require('./country/' + file);
});

readdirSync(__dirname + '/data/').forEach(function (file) {
    const _data = require('./data/' + file);
    const _keys = Object.keys(_data);
    module.exports.data[file.replace('.json', '')] = _data;
});

module.exports.imageDataX384 = require('./images/x384.json');
module.exports.imageData = require('./images/x768.json');

readdirSync(__dirname + '/languages/').forEach(function (file) {
    module.exports.languages[file.replace('.json', '')] = require('./languages/' + file);
});

module.exports.network = require('./network/72.json');
module.exports.networkPreClient = require('./network/77.json');