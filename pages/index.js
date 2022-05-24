import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Favorites } from '../components/Favorites';
import { AllCryptos } from '../components/AllCryptos';
import { News } from './../components/News';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start gap-2 px-2 py-4 sm:px-10 md:px-20 lg:px-36 xl:px-72">
      <Head>
        <title>Krypto</title>
        <meta name="description" content="Track crypto market with Krypto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative w-32 min-h-[30px]">
        <Link href="/">
          <a>
            <Image
              src="/logo.svg"
              layout="fill"
              alt="logo"
              objectFit="content"
            />
          </a>
        </Link>
      </header>
      <main className="flex flex-col justify-start h-full gap-4">
        <Favorites />
        <AllCryptos />
        <h1 className="text-center font-bold text-xl">News</h1>
        <News query="crypto" />
      </main>
    </div>
  );
}
