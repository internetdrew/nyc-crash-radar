import { useRef } from 'react';

import { fetchCrashes } from '@api/fetchCrashes';
import { formatAsTitleCase } from '@helpers/formatAsTitleCase';
import { formatDate } from '@helpers/formatDate';
import { vehicleFormattingMap } from '@utils/vehicleMap';
import { vehicleIconMap, DefaultVehicleIcon } from '@utils/vehicleIconMap';
import { useIntersection } from '@mantine/hooks';
import { formatAsSentenceCase } from '@helpers/formatAsSentenceCase';
import CrashMap from './CrashMap';

const CrashFeed = () => {
  const { isPending, error, data, fetchNextPage, isFetching } = fetchCrashes();

  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  if (entry?.isIntersecting) {
    !isFetching && fetchNextPage();
  }

  const crashList = data?.pages?.flatMap(page => page);

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

      {crashList?.map((crash, idx) => {
        const contributingFactorsPresent =
          [
            crash?.contributing_factor_vehicle_1,
            crash?.contributing_factor_vehicle_2,
            crash?.contributing_factor_vehicle_3,
            crash?.contributing_factor_vehicle_4,
            crash?.contributing_factor_vehicle_5,
          ].filter(factor => factor !== undefined && factor !== 'Unspecified')
            .length > 0;

        if (crash?.vehicle_type_code1) {
          return (
            <div
              id={crash?.collision_id}
              key={crash?.collision_id}
              ref={idx === crashList.length - 1 ? ref : null}
              className='bg-slate-50 mx-auto mb-4 p-6 rounded-2xl shadow-sm ring-1 ring-slate-950'
            >
              <div className='text-gray-700 flex items-center justify-between mb-2 text-sm'>
                <span>#{crash?.collision_id}</span>
                <span>{formatDate(crash?.crash_date)}</span>
              </div>
              <p className='text-xl font-semibold'>
                Crash reported{' '}
                {crash?.cross_street_name &&
                  `near ${formatAsTitleCase(crash.cross_street_name)}`}
                {crash.on_street_name &&
                  `on ${formatAsTitleCase(crash?.on_street_name)}`}
                {crash?.borough && ` in ${formatAsTitleCase(crash.borough)}`}
              </p>
              <section className='mt-6 mb-2'>
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
                    if (vehicle) {
                      return (
                        <article
                          key={`vehicle ${index}`}
                          className='ring-1 ring-slate-950 w-full text-center p-2 mx-auto rounded-lg font-semibold mt-auto text-xs sm:text-sm'
                        >
                          {crash?.vehicle_type_code2 && (
                            <p>Vehicle {index + 1}</p>
                          )}
                          {vehicleIconMap.get(vehicle) ?? (
                            <DefaultVehicleIcon />
                          )}
                          {vehicleFormattingMap.get(vehicle) ?? vehicle}
                        </article>
                      );
                    }
                  })}
                </div>
              </section>
              {contributingFactorsPresent && (
                <section>
                  <p className='mt-6 mb-2 text-gray-800'>
                    Contributing Factors
                  </p>
                  <ul>
                    {[
                      crash?.contributing_factor_vehicle_1,
                      crash?.contributing_factor_vehicle_2,
                      crash?.contributing_factor_vehicle_3,
                      crash?.contributing_factor_vehicle_4,
                      crash?.contributing_factor_vehicle_5,
                    ].map((factor, index) => {
                      if (factor && factor !== 'Unspecified') {
                        return (
                          <li
                            key={`contributing-factor-${index}`}
                            className='mb-2 p-2 rounded-lg shadow-sm bg-slate-950 text-slate-50 font-semibold'
                          >
                            {formatAsSentenceCase(factor)} (Vehicle {index + 1})
                          </li>
                        );
                      }
                    })}
                  </ul>
                </section>
              )}

              {crash?.latitude && crash?.longitude && (
                <section>
                  <CrashMap
                    lat={parseFloat(crash?.latitude)}
                    lng={parseFloat(crash?.longitude)}
                  />
                </section>
              )}
            </div>
          );
        }
      })}
    </main>
  );
};

export default CrashFeed;
