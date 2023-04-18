import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Amplify } from '@aws-amplify/core';

Amplify.configure({
  Auth: {
  region: 'us-east-1',
  userPoolId: 'us-east-1_xxxxx',
  userPoolWebClientId: 'xxxx',
  oauth: {
    domain: 'xxxx',
    scope: [],
    redirectSignIn: window.location.origin,
    redirectSignOut: window.location.origin,
    responseType: 'code',
    options: {
      AdvancedSecurityDataCollectionFlag: false,
    },
  },

  // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
  mandatorySignIn: false,
}});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
