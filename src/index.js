import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';
import store from './reducers';
import { Provider } from 'react-redux';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import UserProfile from './UserProfile'
import SystemInformation from './SystemInformation';
import env from "react-dotenv";

(async () => {
    const ldconfig = {
      clientSideID: env.LD_CLIENT_KEY,
      user: {
        ...UserProfile,
        "custom": SystemInformation
      },
      reactOptions: {
        useCamelCaseFlagKeys: false
      }
    }
    console.log(ldconfig)
    const LDProvider = await asyncWithLDProvider(ldconfig);
    
    ReactDOM.render(
      <Provider store={store}>
        <LDProvider>
          <App />
        </LDProvider>
      </Provider>,
      document.getElementById('root'));
  })();
