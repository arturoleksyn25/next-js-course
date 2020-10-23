import {useSelector, useDispatch} from 'react-redux'

import {timerActions} from '../bus/timer/actions';
import {RootState} from "../setup/typesDefinisions";

const Counter = () => {
  const count = useSelector((state: RootState) => state.timer.count);

  const dispatch = useDispatch();

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(timerActions.increment())}>+1</button>
      <button onClick={() => dispatch(timerActions.decrement())}>-1</button>
      <button onClick={() => dispatch(timerActions.reset())}>Reset</button>
    </div>
  )
}

export default Counter