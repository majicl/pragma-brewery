import React from 'react';
import { Provider } from 'react-redux';
import Socket from './Socket';
import ErrorBoundary from './error-boundary.js';
import configureStore from './store/index.js';

export default () => (
  <Provider store={configureStore()}>
    <ErrorBoundary>
      <Socket />
    </ErrorBoundary>
  </Provider>
);
