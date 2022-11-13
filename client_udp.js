const dgram = require('dgram');
const { DATA_UDP } = require('./utils');
const PORT = DATA_UDP.port;
const HOST = DATA_UDP.host;

const client = dgram.createSocket('udp4');

client.send(
    Buffer.from('Enviando mensagem do cliente para UDP server'),
    PORT,
    HOST,
    () => {
        console.log(`Enviei msg para o server UDP: ${HOST}:${PORT}`);
    }
)