import { io } from 'socket.io-client';

export let socket;

export const websocket = {
  connect: async () => {
    socket = await io('ws://localhost:2089');
    socket.on('connect', () => {
      console.log('Socket.io connected');
      websocket.connected = true;
    });
    socket.on('ping', ({ iat }) => {
      console.log('Websocket ping', Date.now() - iat, 'ms');
    });
  },
  connected: false
};
