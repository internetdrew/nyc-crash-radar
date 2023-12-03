import { useQuery } from '@tanstack/react-query';

export const fetchCrashes = () => {
  const crashData = useQuery({
    queryKey: ['crashData'],
    queryFn: () =>
      fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json').then(res =>
        res.json()
      ),
  });
  return crashData;
};
