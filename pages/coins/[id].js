import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { Ring } from 'react-awesome-spinners';

// Dynamically import chart to prevent hydration error
const PriceChart = dynamic(
  () => import('../../components/PriceChart').then((mod) => mod.PriceChart),
  {
    ssr: false,
  }
);

const CryptoDetails = () => {
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { id } = router.query;

  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`,
    fetcher
  );

  if (!data)
    return (
      <div className="flex justify-center">
        <Ring />
      </div>
    );
  return (
    <div className="min-h-screen flex flex-col justify-start gap-2 px-2 py-4 sm:px-10 md:px-20 lg:px-36 xl:px-72">
      <Head>
        <title>Krypto</title>
        <meta name="description" content="Track crypto market with Krypto!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative w-32 min-h-[30px]">
        <Image src="/logo.svg" layout="fill" alt="logo" objectFit="content" />
      </header>
      <main className="flex flex-col justify-start h-full gap-10">
        {data && (
          <>
            <div className="flex justify-center gap-4">
              <div className="relative w-7 h-7">
                <Image src={data?.image?.large} alt="coin icon" layout="fill" />
              </div>
              <h1 className="text-xl font-bold">{data?.name}</h1>
            </div>
            <PriceChart />
            <div className="flex justify-center gap-4 text-center">
              <div>
                <h1 className="font-bold">Market Cap</h1>
                <h1>{`$${data.market_data.market_cap.usd.toLocaleString()}`}</h1>
              </div>
              <div>
                <h1 className="font-bold">24h Low / 24h High</h1>
                <h1>{`$${data.market_data.low_24h.usd.toLocaleString()} / $${data.market_data.high_24h.usd.toLocaleString()}`}</h1>
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-bold">Description</h1>
              <p dangerouslySetInnerHTML={{ __html: data.description.en }}></p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CryptoDetails;
