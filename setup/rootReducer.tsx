import {combineReducers} from 'redux';

import {timerReducer} from '../bus/timer/reducer';

export const createRootReducer = () => combineReducers({
  timer: timerReducer
})