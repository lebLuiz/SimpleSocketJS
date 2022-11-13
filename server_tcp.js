const net = require('net');
const server = net.createServer();
const { DATA_TCP } = require('./utils');

const port = DATA_TCP.port;
const host = DATA_TCP.host;
const sockets = [];

server.listen(port, host);

server.on('listening', () => {
    let address = server.address();
    console.log(`[SERVER TCP] Escutando => ${address.address}:${address.port}`);
});

server.on('connection', (socket) => {
    console.log(`[SERVER TCP] Cliente conectado => ${socket.remoteAddress}:${socket.remotePort}`);
    sockets.push(socket);

    socket.on('data', (data) => {
        console.log('DADOS RECEBIDOS');
        console.log(data.toString());
    });

    socket.on('close', (data) => {
        let index = sockets.findIndex((o) => {
            return o.remoteAddress === socket.remoteAddress && o.remotePort === socket.remotePort;
        });

        if (index !== -1)
            sockets.splice(index, 1);

        console.log(`FECHADO: ${socket.remoteAddress}:${socket.remotePort}`);
    });
});