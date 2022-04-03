import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './reducers';
import { Provider } from 'react-redux';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import UserProfile from './UserProfile'
import SystemInformation from './SystemInformation';

  (async () => {
    
    const LDProvider = await asyncWithLDProvider({
      clientSideID: "6238e4a84409e214da367c6a",
      user: UserProfile,
      custom: SystemInformation,
      reactOptions: {
        useCamelCaseFlagKeys: false
      }
    });
    
    ReactDOM.render(
      <Provider store={store}>
        <LDProvider>
          <App />
        </LDProvider>
      </Provider>,
      document.getElementById('root'));
  })();
