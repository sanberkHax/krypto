import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Krypto</title>
        <meta name="description" content="Track crypto market with Krypto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Krypto</main>
    </div>
  );
}
