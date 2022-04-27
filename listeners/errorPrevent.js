//DONT TOUCH THIS.
//=====================================
const client = require('/home/container/index.js');
client.on('error', m => console.log(m));
process.on('uncaughtException', error => console.log(error));
//======================================
