
import {types} from "./types";

export const timerActions = {
  // Sync
  startClock: () => {
    return {
      type: types.START_CLOCK
    };
  },
  tickClock: (isServer: boolean) => {
    return {
      type: types.TICK_CLOCK,
      light: !isServer,
      ts: Date.now(),
    }
  },
  increment: () => {
    return {type: types.INCREMENT}
  },
  decrement: () => {
    return {type: types.DECREMENT}
  },
  reset: () => {
    return {type: types.RESET}
  }
  // Async
}