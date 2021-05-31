import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";
import { store, persistor } from "redux/store";
import i18n from "i18n";
import { history } from "routes/history";
import WBLoader from "components/WBLoader";
import customTheme from "theme/theme";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<WBLoader />}>
            <ConnectedRouter history={history}>
              <I18nextProvider i18n={i18n}>
                <App />
              </I18nextProvider>
            </ConnectedRouter>
          </Suspense>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
