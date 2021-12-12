import { ChakraProvider } from '@chakra-ui/react';
import WBLoader from 'components/WBLoader';
import i18n from 'i18n';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { history } from 'redux/store';
import customTheme from 'theme/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<WBLoader />}>
            <Router history={history}>
              <I18nextProvider i18n={i18n}>
                <App />
              </I18nextProvider>
            </Router>
          </Suspense>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
