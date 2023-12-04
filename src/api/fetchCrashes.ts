import { useQuery } from '@tanstack/react-query';

interface CrashData {
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

export const fetchCrashes = () => {
  return useQuery({
    queryKey: ['crashData'],
    queryFn: async () => {
      const res = await fetch(
        'https://data.cityofnewyork.us/resource/h9gi-nx95.json?$order=crash_date DESC'
      );
      const data = await res.json();
      return data as CrashData[];
    },
  });
};
