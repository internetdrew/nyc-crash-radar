import { fetchCrashes } from '@api/fetchCrashes';
import { formatLocationString } from '@helpers/formatLocationString';

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
  const { isPending, error, data } = fetchCrashes();
  console.log(data);

  return (
    <main className='max-w-4xl mx-auto mt-20 px-4'>
      {isPending && <p>Fetching data...</p>}
      {error && <p>Uh oh! Something went wrong.</p>}

      {data?.map((crash: CrashData) => (
        <div
          key={crash?.collision_id}
          className='bg-white max-w-lg mx-auto mb-4 p-4 rounded-2xl shadow-sm'
        >
          <p className='text-xl font-semibold'>
            Crash reported on {formatLocationString(crash?.on_street_name)}
          </p>
        </div>
      ))}
    </main>
  );
};

export default CrashFeed;
