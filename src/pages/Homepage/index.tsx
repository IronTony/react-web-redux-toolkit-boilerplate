import { Button, HStack, Text } from '@chakra-ui/react';
import WBContainer from 'components/WBContainer';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { decrementRequest, incrementRequest, resetRequest } from 'redux/counter/actions';
import { counterInfo } from 'redux/counter/selectors';

const Homepage: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const counterData = useSelector(counterInfo);

  const changeCounter = useCallback(
    (param: string) => {
      switch (param) {
        case 'increment':
          dispatch(incrementRequest());
          break;
        case 'decrement':
          dispatch(decrementRequest());
          break;
        default:
          dispatch(resetRequest());
      }
    },
    [dispatch],
  );

  return (
    <WBContainer>
      <HStack>
        <Text>{counterData}</Text>

        <Button variant="ghost" onClick={() => changeCounter('increment')}>
          {t('common.increment')}
        </Button>
        <Button variant="ghost" onClick={() => changeCounter('decrement')}>
          {t('common.decrement')}
        </Button>

        <Button variant="ghost" onClick={() => changeCounter('reset')}>
          {t('common.reset')}
        </Button>
      </HStack>
    </WBContainer>
  );
};

export default Homepage;
