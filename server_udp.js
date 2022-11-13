const dgram = require('dgram');
const { DATA_UDP } = require('./utils');
const PORT = DATA_UDP.port;
const HOST = DATA_UDP.host;

const server = dgram.createSocket('udp4');

server.on('listening', () => {
    let address = server.address();
    console.log(`[SERVER UDP] Escutando => ${address.address}:${address.port}`);
});

server.on('message', (data, remote_info) => {
    console.log(data.toString()); // Retorna um buffer(.toString())
    console.log(remote_info); // Retorna um object
});

server.on('error', (error) => {
    console.log(error);
});

server.on('close', () => {
    console.log('Servidor fechado!');
});

server.bind(PORT, HOST);