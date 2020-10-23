import { useSelector } from 'react-redux'
import {RootState} from "../setup/typesDefinisions";

import {Clock, Counter} from './index';

function Page() {
  const {lastUpdate, light} = useSelector((state: RootState) => state.timer)

  return (
    <div>
      <Clock
        lastUpdate={lastUpdate}
        light={light}
      />
      <Counter />
    </div>
  )
}

export default Page