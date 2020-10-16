import * as React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { counterInfo } from 'redux/counter/selectors';

const AnotherPage: FC = () => {
  const counterData = useSelector(counterInfo);

  return (
    <div className="App">
      <header className="App-header">
        <span>AnotherPage page</span>
        <span>{counterData}</span>
      </header>
    </div>
  );
};

export default AnotherPage;
