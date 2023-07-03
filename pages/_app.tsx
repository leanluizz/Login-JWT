import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContexProvider } from '../pages/components/context.tsx'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <ContexProvider>
  <Component {...pageProps} />
  </ContexProvider>
  )
}
