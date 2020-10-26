import React from 'react';
import openSocket from 'socket.io-client';
import config from './config.js';
import { notifyBeersWithOutsideTemperature } from '~/Beers/state/beers.actions.js';
import { store } from './store/index.js';

export const eventHandler = beerIds => {
  console.count();
  store.dispatch(notifyBeersWithOutsideTemperature(beerIds));
};

class Socket extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const socketConfig = config.get().socket;
    const socket = openSocket(socketConfig.url);
    this.setState({
      socket
    });
    socket.on(socketConfig.eventName, eventHandler);
  }

  componentWillUnmount() {
    if (this.state.socket) {
      this.state.socket.io.disconnect();
    }
  }

  render() {
    return null;
  }
}

export default Socket;
