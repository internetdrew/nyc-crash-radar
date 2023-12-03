import { useQuery } from '@tanstack/react-query';
import { capitalizeFirstLetterOnly } from '../helpers/capitalizeFirstLetterOnly';

interface CrashData {
  collision_id: string;
  crash_date: string;
  crash_time: string;
  on_street_name: string;
  off_street_name: string;
  latitude: string;
  longitude: string;
  location: {
    human_address: string;
    latitude: string;
    longitude: string;
  };
  number_of_persons_injured: string;
  number_of_persons_killed: string;
  number_of_pedestrians_injured: string;
  number_of_pedestrians_killed: string;
  number_of_cyclist_injured: string;
  number_of_cyclist_killed: string;
  number_of_motorist_injured: string;
  number_of_motorist_killed: string;
  contributing_factor_vehicle_1: string;
  contributing_factor_vehicle_2: string;
  vehicle_type_code1: string;
  vehicle_type_code2: string;
}

const CrashFeed = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['crashData'],
    queryFn: () =>
      fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json').then(res =>
        res.json()
      ),
  });

  console.log(data);

  return (
    <main className='bg-red-200 max-w-4xl mx-auto mt-20 px-4'>
      {isPending && <p>Fetching data...</p>}
      {error && <p>Uh oh! Something went wrong.</p>}
      {data?.map((crash: CrashData) => (
        <p key={crash?.collision_id}>
          Crash at {capitalizeFirstLetterOnly(crash?.on_street_name)}
        </p>
      ))}
    </main>
  );
};

export default CrashFeed;
