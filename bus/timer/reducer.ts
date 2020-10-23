import {AnyAction} from 'redux';
import {HYDRATE} from 'next-redux-wrapper';
import {diff} from 'jsondiffpatch'

import {types} from './types';

export interface ITimerState {
  lastUpdate: number,
  light: boolean,
  count: number
}

const initialState: ITimerState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export const timerReducer = (state:ITimerState=initialState, action:AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload.timer) as ITimerState;
      const wasBumpedOnClient = stateDiff?.count?.[0];
      return {
        ...state,
        ...action.payload.timer,
        count: wasBumpedOnClient ? state.count : action.payload.timer.count
      };
    case types.TICK_CLOCK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light,
      }
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case types.RESET:
      return {
        ...state,
        count: initialState.count
      }
    default: return state;
  }
};
