import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './reducers';
import { Provider } from 'react-redux';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import UserProfile from './UserProfile'
import SystemInformation from './SystemInformation';
import env from "react-dotenv";

  (async () => {
    
    const LDProvider = await asyncWithLDProvider({
      clientSideID: env.LD_CLIENT_KEY,
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
