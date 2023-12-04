import { fetchCrashes } from '@api/fetchCrashes';
import { formatLocationString } from '@helpers/formatLocationString';
import { formatDate } from '@/helpers/formatDate';
import { formatVehicle } from '@/helpers/formatVehicle';
import { TbCarSuv } from 'react-icons/tb';
import { FaCar } from 'react-icons/fa';
import { FaTruckPickup } from 'react-icons/fa';
import { GiTruck } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import { GiFuelTank } from 'react-icons/gi';

interface CrashDataProps {
  collision_id: string;
  crash_date: string;
  crash_time: string;
  on_street_name: string;
  off_street_name: string;
  cross_street_name: string;
  latitude: string;
  longitude: string;
  location: {
    human_address: string;
    latitude: string;
    longitude: string;
  };
  borough: string;
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
  contributing_factor_vehicle_3: string;
  vehicle_type_code1: string;
  vehicle_type_code2: string;
  vehicle_type_code3: string;
}

const iconClasses = 'mx-auto w-8 h-8';

const iconMapping: Record<string, JSX.Element> = {
  'Station Wagon/Sport Utility Vehicle': <TbCarSuv className={iconClasses} />,
  Sedan: <FaCar className={iconClasses} />,
  'Pick-up Truck': <FaTruckPickup className={iconClasses} />,
  'Tractor Truck Diesel': <GiTruck className={iconClasses} />,
  Dump: <FaTruck className={iconClasses} />,
  Tanker: <GiFuelTank className={iconClasses} />,
};

const CrashFeed = () => {
  const { isPending, error, data } = fetchCrashes();
  console.log(data);

  return (
    <main className='max-w-lg mx-auto mt-10 p-4'>
      {isPending && <p>Fetching data...</p>}
      {error && <p>Uh oh! Something went wrong.</p>}

      {data?.map((crash: CrashDataProps, idx: number) => (
        <div
          key={crash?.collision_id}
          className='bg-white mx-auto mb-4 p-6 rounded-2xl shadow-sm ring-1 ring-slate-300'
        >
          <p className='text-right mb-2 text-gray-600 text-sm'>
            {formatDate(crash?.crash_date)}
          </p>
          <p className='text-xl font-semibold'>
            Crash reported{' '}
            {crash?.cross_street_name &&
              `near ${formatLocationString(crash.cross_street_name)}`}
            {crash.on_street_name &&
              `on ${formatLocationString(crash?.on_street_name)}`}
            {crash?.borough && ` in ${formatLocationString(crash.borough)}`}{' '}
            {idx}
          </p>
          <section className='mt-6'>
            <p className='mb-2 text-gray-600'>Vehicles Involved</p>
            <div className='grid grid-cols-2 gap-4'>
              {[
                crash?.vehicle_type_code1,
                crash?.vehicle_type_code2,
                crash?.vehicle_type_code3,
              ].map(vehicle => {
                if (vehicle)
                  return (
                    <article className='ring-1 ring-slate-300 w-full text-center p-2 mx-auto rounded-lg font-semibold mt-auto text-xs sm:text-sm'>
                      {iconMapping[vehicle]}
                      {formatVehicle(vehicle)}
                    </article>
                  );
              })}
            </div>
          </section>
        </div>
      ))}
    </main>
  );
};

export default CrashFeed;
