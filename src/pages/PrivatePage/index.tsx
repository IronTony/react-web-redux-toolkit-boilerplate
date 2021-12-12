import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterInfo } from 'redux/counter/selectors';
import { getAllFilmsRequest } from 'redux/ghibli/actions';

const PrivatePage: FC = () => {
  const dispatch = useDispatch();
  const counterData = useSelector(counterInfo);

  useEffect(() => {
    dispatch(getAllFilmsRequest({ limit: 30 }));
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <span>PrivatePage page</span>
        <span>{counterData}</span>
      </header>
    </div>
  );
};

export default PrivatePage;
