import React from 'react';
import { fetchCrashes } from '@api/fetchCrashes';
import { formatLocationString } from '@helpers/formatLocationString';
import { formatDate } from '@/helpers/formatDate';
import { formatVehicle } from '@/helpers/formatVehicle';
import { iconMapping, DefaultVehicleIcon } from '@/utils/vehicleIconMap';

const CrashFeed = () => {
  const { isPending, error, data, fetchNextPage, isFetching } = fetchCrashes();

  return (
    <main className='max-w-lg mx-auto mt-10 p-4'>
      {isPending && (
        <p className='text-xl font-bold text-center'>Fetching crash data...</p>
      )}
      {error && (
        <p className='text-xl font-bold text-center'>
          Uh oh! Something went wrong.
        </p>
      )}

      {data?.pages?.map((page, i) => (
        <React.Fragment key={`page-${i}`}>
          {page?.map(crash => {
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
                    {crash?.borough &&
                      ` in ${formatLocationString(crash.borough)}`}
                  </p>
                  <section className='mt-6'>
                    {crash?.vehicle_type_code1 && (
                      <p className='mb-2 text-gray-800'>
                        {crash?.vehicle_type_code2
                          ? 'Vehicles Involved'
                          : 'Vehicle'}{' '}
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
                        if (vehicle) {
                          return (
                            <article
                              key={`vehicle ${index}`}
                              className='ring-1 ring-slate-950 w-full text-center p-2 mx-auto rounded-lg font-semibold mt-auto text-xs sm:text-sm'
                            >
                              {crash?.vehicle_type_code2 && (
                                <p>Vehicle {index + 1}</p>
                              )}
                              {iconMapping[vehicle] ?? <DefaultVehicleIcon />}
                              {formatVehicle(vehicle)}
                            </article>
                          );
                        }
                      })}
                    </div>
                  </section>
                </div>
              );
            }
          })}
        </React.Fragment>
      ))}
      <button
        onClick={() => !isFetching && fetchNextPage()}
        className='bg-black w-full text-white font-semibold p-2'
      >
        Load more
      </button>
    </main>
  );
};

export default CrashFeed;
