import React from 'react'
import Head from 'next/head'

import Homepage from '../components/Homepage'

const Home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Erick Portfolio Website</title>
      </Head>
      <Homepage />
    </>
  )
}

export default Home
