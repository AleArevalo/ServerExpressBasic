const { response } = require('express');

const petGet = (req, res = response) => {
    res.send('Hello World pet');
}

module.exports = {
    petGet
}