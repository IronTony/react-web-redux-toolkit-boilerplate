import * as React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WBContainer from 'components/WBContainer';
import { counterInfo } from 'redux/counter/selectors';
import { decrementRequest, incrementRequest, resetRequest } from 'redux/counter/actions';

const Homepage: FC = () => {
  const dispatch = useDispatch();
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
        <span>Increment</span>
      </button>
      <button onClick={() => changeCounter('decrement')}>
        <span>Decrement</span>
      </button>

      <button onClick={() => changeCounter('reset')}>
        <span>Reset counter</span>
      </button>
    </WBContainer>
  );
};

export default Homepage;
