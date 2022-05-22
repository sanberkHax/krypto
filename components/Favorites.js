import { Star } from './Star';
import Image from 'next/image';

export const Favorites = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex gap-2 justify-center items-center">
        <Star />
        <h1 className="font-bold">Favorites</h1>
      </div>
      <div className="w-full text-sm flex justify-center border-2 border-solid border-black rounded-lg p-1">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th></th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};
