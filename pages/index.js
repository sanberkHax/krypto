import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between p-6">
      <Head>
        <title>Krypto</title>
        <meta name="description" content="Track crypto market with Krypto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative w-32 h-8">
        <Image src="/logo.svg" layout="fill" alt="logo" objectFit="content" />
      </header>
      <main></main>
    </div>
  );
}
