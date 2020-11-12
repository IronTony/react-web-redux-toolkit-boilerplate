import counter from './counter/reducers';
import { allFilmsReducer } from './ghibli/reducers';
import messageHandler from './messageHandler/reducers';

const reducers = {
  counter,
  films: allFilmsReducer,
  messages: messageHandler,
};

export default reducers;
