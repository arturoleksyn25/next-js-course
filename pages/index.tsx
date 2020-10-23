import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {END} from 'redux-saga';

import {wrapper, SagaStore} from '../setup/configStore';
import {timerActions} from '../bus/timer/actions';
import {MainLayout, Page} from "../components";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(timerActions.startClock());
  }, [dispatch])


  return (
    <MainLayout title={'Home page'}>
      <Page/>
    </MainLayout>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({store}: {store: SagaStore}) => {
  store.dispatch(timerActions.tickClock(false))

  if (!store.getState().placeholderData) {
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

export default Index;
