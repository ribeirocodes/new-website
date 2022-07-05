import Head from 'next/head'
import About from "./About/about";
import Hero from "./Hero/hero";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Vinicius Ribeiro - Senior Software Engineer</title>
      </Head>
      <Hero />
      <About />
    </>
  )
}