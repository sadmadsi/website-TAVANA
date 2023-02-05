import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from "react-toastify";
import React, { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const toast: any = useRef(null);

  return (
    <>
      <Head>
        <title>خدمات مالی توانا - سرمایه گذاری کارگزاری بورس</title>
      </Head>
      <ToastContainer
        ref={toast}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        toastStyle={{ fontFamily: "PelakFA", fontSize: '14px' }}
      />
      <Component {...pageProps} />
    </>
  )
}
