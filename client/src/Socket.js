import { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';
import config from './config.js';
import { notifyBeersWithOutsideTemperature } from '~/Beers/state/beers.actions.js';
import { store } from './store/index.js';

export const eventHandler = (beerIds) => {
  store.dispatch(notifyBeersWithOutsideTemperature(beerIds));
};

export default () => {
  const socketConfig = config.get().socket;
  const [socket] = useState(openSocket(socketConfig.url));
  useEffect(() => {
    socket.on(socketConfig.eventName, eventHandler);
    return () => {
      if (socket.io) {
        socket.io.disconnect();
      }
    };
  });
  return null;
};
