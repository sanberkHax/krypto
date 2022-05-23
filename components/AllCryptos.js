import { Crypto } from './Crypto';

export const AllCryptos = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex gap-2 justify-center items-center">
        <h1 className="font-bold">All Cryptocurrencies</h1>
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
            <Crypto
              icon="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
              price="$30,168.84"
              oneDayChange="3.0%"
              name="Bitcoin"
              oneDayVolume="$19,614,704,006"
            />
            <Crypto
              icon="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
              price="$30,168.84"
              oneDayChange="3.0%"
              name="Bitcoin"
              oneDayVolume="$19,614,704,006"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
