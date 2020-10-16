import * as React from 'react';
import { FC, useLayoutEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WBHeader from 'components/WBHeader';
import Homepage from 'pages/Homepage';
import AnotherPage from 'pages/AnotherPage';
import customTheme from 'theme/theme';

const App: FC = () => {
  // Remember to change the name of the font based on what you are using
  const font = new FontFaceObserver('Nunito+Sans');
  const html = document.documentElement;

  useLayoutEffect(() => {
    html.classList.add('fonts-loading');

    font
      .load()
      .then(function () {
        html.classList.remove('fonts-loading');
        html.classList.add('fonts-loaded');
      })
      .catch(function () {
        html.classList.remove('fonts-loading');
        html.classList.add('fonts-failed');
      });
  });
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <WBHeader />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/another-page" component={AnotherPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
