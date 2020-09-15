import Head from 'next/head';
import Nav from '../components/nav';

const Page = () => (
  <div>
    <Head>
      <title>Next.js + Tailwind Starter</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Nav />
    <h1 className="text-5xl text-center text-teal-800">
      Next.js + Tailwind Starter
    </h1>
  </div>
);

export default Page;
