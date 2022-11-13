const net = require('net');
const readline = require('readline');
const { DATA_TCP } = require('./utils');
const PORT = DATA_TCP.port;
const HOST = DATA_TCP.host;

const client = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(PORT, HOST, () => {
    console.log('Conectou!');
    rl.addListener('line', line => {
        client.write(line);
    });
});