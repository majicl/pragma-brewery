import React from 'react';
import openSocket from 'socket.io-client';
import config from './config.js';

export default class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const socketConfig = config.get().socket;
    const socket = openSocket(socketConfig.url);
    socket.on(socketConfig.eventName, eventHandler);
  }

  render() {
    return null;
  }
}

export const eventHandler = beersOutsideOfTemperature => {};
