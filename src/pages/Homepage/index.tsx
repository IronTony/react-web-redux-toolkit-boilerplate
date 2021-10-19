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
      <span>{counterData}</span>
      <button onClick={() => changeCounter('increment')}>
        <span>{t('common:increment')}</span>
      </button>
      <button onClick={() => changeCounter('decrement')}>
        <span>{t('common:decrement')}</span>
      </button>

      <button onClick={() => changeCounter('reset')}>
        <span>{t('common:reset')}</span>
      </button>
    </WBContainer>
  );
};

export default Homepage;
