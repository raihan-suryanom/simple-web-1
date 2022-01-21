import Head from 'next/head';
import * as Section from '../components';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Profile Company website generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="bg-hero bg-no-repeat bg-cover px-[105px]" id="header">
        <Section.Hero />
      </header>
      <Section.About />
      <Section.Features />
      <Section.Products />
      <Section.Authors />
      <Section.Footer />
    </>
  );
}
