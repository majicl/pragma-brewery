import React from 'react';
import Socket from './Socket';
import ErrorBoundary from './error-boundary.js';

export default () => (
  <ErrorBoundary>
    <Socket />
  </ErrorBoundary>
);
