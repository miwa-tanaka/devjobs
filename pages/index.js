import Head from 'next/head'
import Header from "../components/header"
import Search from "../components/search"
import Card from "../components/card"
// import Image from 'next/image'
// import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devjobs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
        <Search></Search>
        <Card></Card>
      </main>
    </div>
  )
}
