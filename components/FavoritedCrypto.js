import React from 'react';
import Image from 'next/image';
import { StarButton } from './StarButton';

export const FavoritedCrypto = ({
  icon,
  name,
  price,
  oneDayChange,
  sparkline,
}) => {
  return (
    <tr className="border-t-2 border-slate-300 align-middle">
      <td>
        <StarButton starred />
      </td>
      <td>
        <div className="relative w-7 h-7">
          <Image src={icon} alt="btc" layout="fill" />
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{oneDayChange}</td>
      <td>
        <Image src={sparkline} alt="sparkline" width="120px" height="30px" />
      </td>
    </tr>
  );
};
