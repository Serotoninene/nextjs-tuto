import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout >
      <Head>
        <title>First Post</title>
      </Head>
   
      <h1>FirstPost</h1>
    </Layout>
  )
}
