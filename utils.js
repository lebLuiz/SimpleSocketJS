const HOST_DEFAULT = '127.0.0.1';

const data_tcp = {
    host: HOST_DEFAULT,
    port: 8080,
};

const data_udp = {
    host: HOST_DEFAULT,
    port: 8081,
};

module.exports = Object.freeze({
    DATA_TCP: data_tcp,
    DATA_UDP: data_udp,
});