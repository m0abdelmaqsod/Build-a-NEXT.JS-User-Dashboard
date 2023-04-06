import '@/styles/globals.css'
// import type { AppProps } from 'next/app';
// import Sidebar from '../components/Sidebar';
import Sidebar from '@/components/Sidebar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}
