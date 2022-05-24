import { useState } from 'react';
import { Crypto } from './Crypto';
import useSWR from 'swr';
import { Ring } from 'react-awesome-spinners';
import { Search } from './Search';

export const AllCryptos = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const [pageIndex, setPageIndex] = useState(1);

  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageIndex}&sparkline=true&price_change_percentage=24h`,
    fetcher
  );

  if (error)
    return <div className="text-red-500 text-center">Failed to Load Data</div>;
  if (!data)
    return (
      <div className="flex justify-center">
        <Ring />
      </div>
    );
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex gap-2 justify-center items-center">
        <h1 className="font-bold">All Cryptocurrencies</h1>
      </div>
      <div className="flex justify-center relative">
        <Search />
      </div>
      <div className="w-full text-sm flex justify-center border-2 border-solid border-black rounded-lg p-1">
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>24h Volume</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((c) => (
              <Crypto
                id={c.id}
                key={c.id}
                icon={c.image}
                price={`$${c.current_price.toLocaleString()}`}
                oneDayChange={`${parseFloat(
                  c.price_change_percentage_24h
                ).toFixed(2)}%`}
                name={c.name}
                oneDayVolume={`$${c.total_volume.toLocaleString()}`}
                sparkline={c.sparkline_in_7d.price}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-10 m-10">
        {pageIndex > 1 && (
          <button onClick={() => setPageIndex(pageIndex - 1)}>
            Previous Page
          </button>
        )}
        {pageIndex < 365 && (
          <button onClick={() => setPageIndex(pageIndex + 1)}>Next Page</button>
        )}
      </div>
    </div>
  );
};
