import {all, call, take, put, delay} from "redux-saga/effects";
import {types} from "../bus/timer/types";
import {timerActions} from '../bus/timer/actions';
import {timerWatcher} from '../bus/timer/saga/watchers';

function* runClockSaga() {
  yield take(types.START_CLOCK)
  while (true) {
    yield put(timerActions.tickClock(false))
    yield delay(1000)
  }
}

export function* rootSaga() {
  yield all([
    call(runClockSaga),
    call(timerWatcher)
  ])
}