import React from 'react';
import '@testing-library/jest-dom';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import io from 'socket.io-client';
import Socket, { eventHandler } from '../src/Socket.js';
import config from '../config.js';

configure({ adapter: new Adapter() });

const socketConfigs = config.get().socket;

let wrapper;
let setState;
let useStateSpy;
jest.mock('socket.io-client', () => {
  const emit = jest.fn();
  const on = jest.fn();
  const socket = { emit, on };
  return jest.fn(() => socket);
});

describe('<Socket />', () => {
  beforeEach(() => {
    wrapper = shallow(<Socket />);
    setState = jest.fn();
    useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);
  });

  afterEach(() => jest.clearAllMocks());

  it('listens for the MESSAGE event', () => {
    const socket = io();
    expect(socket.on).toHaveBeenCalledWith(
      socketConfigs.eventName,
      ceventHandler
    );
  });
});
