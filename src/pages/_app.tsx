// import '../styles/home.css'

import { AppProps } from 'next/app'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Component {...pageProps} />
    </> 
  )
}


export default MyApp
