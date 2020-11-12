import * as React from 'react';
import { FC, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { CSSReset, useToast, Flex } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';
import { messageHandlerFullInfo } from 'redux/messageHandler/selectors';
import { messageHandlerReset } from 'redux/messageHandler/actions';
import WBHeader from 'components/WBHeader';
import ScrollToTop from 'components/ScrollToTopOnMount';
import Homepage from 'pages/Homepage';
import AnotherPage from 'pages/AnotherPage';

const App: FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const hasGeneralMessage = useSelector(messageHandlerFullInfo);

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

  useEffect(() => {
    if (hasGeneralMessage?.message) {
      toast({
        // title: 'Warning.',
        description: hasGeneralMessage.description,
        status: hasGeneralMessage.type,
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        dispatch(messageHandlerReset());
      }, 3000);
    }
  }, [hasGeneralMessage, toast, dispatch]);

  return (
    <Flex height="100%" width="100%">
      <CSSReset />
      <>
        <WBHeader />
        <ScrollToTop />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/another-page" component={AnotherPage} />
        </Switch>
      </>
    </Flex>
  );
};

export default App;
