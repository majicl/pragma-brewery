import React from 'react';
import openSocket from 'socket.io-client';

export default class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const socket = openSocket('http://localhost:8088');
    socket.on('outside-temperature-beers', console.log);
  }

  render() {
    return null;
  }
}
