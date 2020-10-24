import socket from 'socket.io';
let io = null;

export const activate = (http) => {
    io = socket(http);
    io.on('connection', () => {
        console.log('a user connected');
    });

    return io;
};

export const getActiveSocket = () => {
    return io;
};

export default {
    getActiveSocket,
    activate,
};
