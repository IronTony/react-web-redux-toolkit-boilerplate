import { CSSReset, useToast, Flex } from '@chakra-ui/react';
import ScrollToTop from 'components/ScrollToTopOnMount';
import WBHeader from 'components/WBHeader';
import FontFaceObserver from 'fontfaceobserver';
import AnotherPage from 'pages/AnotherPage';
import Homepage from 'pages/Homepage';
import PrivatePage from 'pages/PrivatePage';
import { FC, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { messageHandlerReset } from 'redux/messageHandler/actions';
import { messageHandlerFullInfo } from 'redux/messageHandler/selectors';
import { PrivateRoute } from 'routes/privateRoute';
import { AppRoutes } from 'routes/routesList';

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
        description: hasGeneralMessage?.message,
        status: hasGeneralMessage?.type,
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
        <Routes>
          <Route path="*" element={<Navigate replace to={AppRoutes.HomePage} />} />
          <Route path={AppRoutes.HomePage} element={<Homepage />} />

          <Route path={AppRoutes.AnotherPage} element={<AnotherPage />} />

          <Route
            path={AppRoutes.PrivatePage}
            element={
              <PrivateRoute redirectTo={AppRoutes.NoAccessPage}>
                <PrivatePage />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Navigate replace to={AppRoutes.HomePage} />} />
        </Routes>
      </>
    </Flex>
  );
};

export default App;
