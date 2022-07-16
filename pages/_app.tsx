import "../styles/globals.sass"

import type { AppProps } from 'next/app'
import { Grommet } from 'grommet'

import theme from "../lib/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (<Grommet theme={theme} full>
    <Component {...pageProps} />
  </Grommet>)
}

export default MyApp
