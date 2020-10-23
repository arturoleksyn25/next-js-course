import {createStore, applyMiddleware, Store} from 'redux'
import {MakeStore, createWrapper} from 'next-redux-wrapper';
import createSagaMiddleware, {Task} from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension'

import {createRootReducer} from './rootReducer';
import {rootSaga} from "./rootSaga";
import {RootState} from './typesDefinisions'

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(createRootReducer(), bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});