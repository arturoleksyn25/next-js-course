import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {timerActions} from "../bus/timer/actions";
import MainLayout from "../components/mainLayout";
import {Page} from "../components";
import {SagaStore, wrapper} from "../setup/configStore";

const About = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(timerActions.startClock());
  }, [dispatch])

  return (
    <MainLayout title={'About page'}>
      <Page/>
    </MainLayout>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({store}: {store: SagaStore}) => {
  store.dispatch(timerActions.tickClock(false))
})

export default About;