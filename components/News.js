import useSWR from 'swr';
import { Ring } from 'react-awesome-spinners';

export const News = ({ query }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `https://newsdata.io/api/1/news?apikey=pub_76666ac12dd835547133d361c56b3b42d796&qInTitle=${query}&country=us&language=en`,
    fetcher
  );

  const reducedResults = data?.results.slice(0, 5);

  if (error)
    return <p className="text-red-500 text-center">Failed to load data</p>;
  if (!data)
    return (
      <div className="flex justify-center">
        <Ring />
      </div>
    );
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      {reducedResults?.length > 0 ? (
        reducedResults.map((n, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 bg-slate-300 rounded-lg p-4"
          >
            <h1 className="font-bold">{n.title}</h1>
            <p>{n.description}</p>
            <a href={n.link} className="text-blue-500">
              {n.link}
            </a>
          </div>
        ))
      ) : (
        <h1>There are no news about this coin</h1>
      )}
    </div>
  );
};
