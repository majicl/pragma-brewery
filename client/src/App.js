import React from 'react';
import { Provider } from 'react-redux';
import Socket from './Socket';
import ErrorBoundary from './error-boundary.js';
import configureStore from './store/index.js';
import App from './components/App/app.container.js';

export default () => (
  <Provider store={configureStore()}>
    <ErrorBoundary>
      <App />
      <Socket />
    </ErrorBoundary>
  </Provider>
);
