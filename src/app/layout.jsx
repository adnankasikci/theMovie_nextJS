import React, { Suspense } from 'react'
import "./globals.css"
import Head from './head'
import Header from './../components/Header';
import Provider from './Provider';
import Tabs from './../components/Tabs';

const Layout = ({ children }) => {
  return (
    <html lang="tr" >
      <body>
        <Provider>
          <Head />
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Tabs />
          </Suspense>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default Layout