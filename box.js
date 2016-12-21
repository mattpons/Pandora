const crypto = require('crypto');


function cryptoRand(msg) {
    const buf = crypto.randomBytes(32);
    return buf.toString('hex');
}

function reverse(message) {
    return message.split('').reverse().join('');
}

module.exports = {
    cryptoRand: cryptoRand,
    reverse: reverse
};
