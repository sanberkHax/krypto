import { FavoritedCrypto } from './FavoritedCrypto';
import { SelectedStarIcon } from './SelectedStarIcon';

export const Favorites = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex gap-2 justify-center items-center">
        <SelectedStarIcon />
        <h1 className="font-bold">Favorites</h1>
      </div>
      <div className="w-full text-sm flex justify-center border-2 border-solid border-black rounded-lg p-1">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            <FavoritedCrypto
              icon="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
              price="$30,168.84"
              oneDayChange="3.0%"
              name="Bitcoin"
              sparkline="https://www.coingecko.com/coins/1/sparkline"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};
