import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import React from 'react'

export default function Contacts() {


  return (
    <>
      <Head>
        <title>Contact | Jiphin George</title>
        <meta
          name="description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />
        <meta property="og:title" content="Contact | Evander Inácio" />
        <meta
          property="og:description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />

        
      </Head>

      <ScrollTop />
      <Contact />
      <Footer />
    </>
  )
}
