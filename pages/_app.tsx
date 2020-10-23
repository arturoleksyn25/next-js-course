import NextProgress from 'nextjs-progressbar';
import {AppProps} from 'next/app';

import {wrapper} from '../setup/configStore';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <NextProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps}/>
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </>
  )
}

export default wrapper.withRedux(MyApp);