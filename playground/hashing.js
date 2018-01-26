const { SHA256 } = require('crypto-js');
const  jwt  = require('jsonwebtoken');

let data = {
    id: 10
};

let token = jwt.sign(data, '123abc');
console.log(token);

let decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

let message = 'I am user number 3';
let hash = SHA256(message).toString();

console.log(`Messge: ${message}`);
console.log(`Hash: ${hash}`);

let dataT = {
    id: 4
};

let tokenT = {
    dataT,
    hash: SHA256(JSON.stringify(dataT) + 'somesecret').toString()
};

let resultHash = SHA256(JSON.stringify(tokenT.data) + 'somesecret').toString();

if (resultHash === tokenT.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust!');
}
