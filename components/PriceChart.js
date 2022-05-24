import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useSWR from 'swr';
import { useState } from 'react';

export const PriceChart = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const [range, setRange] = useState('1');

  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${range}`,
    fetcher
  );

  const convertedChartData = data?.prices.map((p) => {
    const convertedDate = new Date(p[0]).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
    });
    const convertedPrice = p[1];

    return { date: convertedDate, price: convertedPrice };
  });

  const rangeHandler = (e) => {
    const clickedButton = e.target.textContent;

    if (clickedButton === '24h') {
      setRange('1');
    } else if (clickedButton === '7d') {
      setRange('7');
    } else if (clickedButton === '30d') {
      setRange('30');
    } else if (clickedButton === '1y') {
      setRange('365');
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center gap-2" onClick={rangeHandler}>
        <button className="hover:text-orange-400">24h</button>
        <button className="hover:text-orange-400">7d</button>
        <button className="hover:text-orange-400">30d</button>
        <button className="hover:text-orange-400">1y</button>
      </div>
      <ResponsiveContainer width={'90%'} height={300}>
        <LineChart data={convertedChartData} margin={{ left: 25 }}>
          <Line type="linear" dataKey="price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis
            unit={'$'}
            dataKey="price"
            width={90}
            domain={['dataMin', 'dataMax']}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
