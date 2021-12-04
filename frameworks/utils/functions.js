const sampleList = require('./sampleList');

module.exports = {
    generateList: async list => {
        return `module.exports = ${JSON.stringify(list)}`
    }
};