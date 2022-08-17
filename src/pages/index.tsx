import React from 'react'
import Head from 'next/head'

import Homepage from '../components/Homepage'

const Home = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <title>Ericckm</title>
      </Head>
      <Homepage />
    </>
  )
}

export default Home
