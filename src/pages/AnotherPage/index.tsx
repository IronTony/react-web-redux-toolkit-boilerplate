import { Text } from '@chakra-ui/react';
import WBContainer from 'components/WBContainer';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterInfo } from 'redux/counter/selectors';
import { getAllFilmsRequest } from 'redux/ghibli/actions';

const AnotherPage: FC = () => {
  const dispatch = useDispatch();
  const counterData = useSelector(counterInfo);

  useEffect(() => {
    dispatch(getAllFilmsRequest({ limit: 30 }));
  }, [dispatch]);

  return (
    <WBContainer>
      <Text>AnotherPage page</Text>
      <Text>{counterData}</Text>
    </WBContainer>
  );
};

export default AnotherPage;
