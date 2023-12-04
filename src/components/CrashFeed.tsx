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
import { MdOutlinePedalBike } from 'react-icons/md';
import { FaBus } from 'react-icons/fa6';
import { FaTaxi } from 'react-icons/fa';
import { PiVanBold } from 'react-icons/pi';
import { GiScooter } from 'react-icons/gi';
import { MdOutlineElectricBike } from 'react-icons/md';
import { MdOutlineElectricScooter } from 'react-icons/md';
import { GiAmbulance } from 'react-icons/gi';
import { GiMineTruck } from 'react-icons/gi';
import { HiTruck } from 'react-icons/hi2';
import { PiMopedFront } from 'react-icons/pi';
import { FaMotorcycle } from 'react-icons/fa';

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
  vehicle_type_code4: string;
  vehicle_type_code5: string;
}

const iconClasses = 'mx-auto w-8 h-8';

const iconMapping: Record<string, JSX.Element> = {
  'Station Wagon/Sport Utility Vehicle': <TbCarSuv className={iconClasses} />,
  Sedan: <FaCar className={iconClasses} />,
  'Pick-up Truck': <FaTruckPickup className={iconClasses} />,
  'Tractor Truck Diesel': <GiTruck className={iconClasses} />,
  Dump: <GiMineTruck className={iconClasses} />,
  Tanker: <GiFuelTank className={iconClasses} />,
  Bike: <MdOutlinePedalBike className={iconClasses} />,
  Bus: <FaBus className={iconClasses} />,
  Taxi: <FaTaxi className={iconClasses} />,
  Van: <PiVanBold className={iconClasses} />,
  Motorscooter: <GiScooter className={iconClasses} />,
  'E-Bike': <MdOutlineElectricBike className={iconClasses} />,
  'E-Scooter': <MdOutlineElectricScooter className={iconClasses} />,
  Ambulance: <GiAmbulance className={iconClasses} />,
  AMBULANCE: <GiAmbulance className={iconClasses} />,
  'Box Truck': <FaTruck className={iconClasses} />,
  'Garbage or Refuse': <HiTruck className={iconClasses} />,
  Moped: <PiMopedFront className={iconClasses} />,
  Motorcycle: <FaMotorcycle className={iconClasses} />,
};

const CrashFeed = () => {
  const { isPending, error, data } = fetchCrashes();

  return (
    <main className='max-w-lg mx-auto mt-10 p-4'>
      {isPending && <p>Fetching data...</p>}
      {error && <p>Uh oh! Something went wrong.</p>}

      {data?.map((crash: CrashDataProps) => {
        if (crash?.vehicle_type_code1) {
          return (
            <div
              key={crash?.collision_id}
              className='bg-slate-50 mx-auto mb-4 p-6 rounded-2xl shadow-sm ring-1 ring-slate-950'
            >
              <p className='text-right mb-2 text-gray-800 text-sm'>
                {formatDate(crash?.crash_date)}
              </p>
              <p className='text-xl font-semibold'>
                Crash reported{' '}
                {crash?.cross_street_name &&
                  `near ${formatLocationString(crash.cross_street_name)}`}
                {crash.on_street_name &&
                  `on ${formatLocationString(crash?.on_street_name)}`}
                {crash?.borough && ` in ${formatLocationString(crash.borough)}`}
              </p>
              <section className='mt-6'>
                {crash?.vehicle_type_code1 && (
                  <p className='mb-2 text-gray-800'>
                    {crash?.vehicle_type_code2 ? 'Vehicles' : 'Vehicle'}{' '}
                    Involved
                  </p>
                )}
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    crash?.vehicle_type_code1,
                    crash?.vehicle_type_code2,
                    crash?.vehicle_type_code3,
                    crash?.vehicle_type_code4,
                    crash?.vehicle_type_code5,
                  ].map((vehicle, index) => {
                    if (vehicle)
                      return (
                        <article
                          key={`vehicle ${index}`}
                          className='ring-1 ring-slate-950 w-full text-center p-2 mx-auto rounded-lg font-semibold mt-auto text-xs sm:text-sm'
                        >
                          <p>Vehicle {index + 1}</p>
                          {iconMapping[vehicle]}
                          {formatVehicle(vehicle)}
                        </article>
                      );
                  })}
                </div>
              </section>
            </div>
          );
        }
      })}
    </main>
  );
};

export default CrashFeed;
