export const formatVehicle = (vehicle: string) => {
  switch (vehicle) {
    case 'Station Wagon/Sport Utility Vehicle':
      return 'Station Wagon/SUV';
    case 'UTILITY':
      return 'Utility';
    case 'BOX VAN':
      return 'Box Van';
    case 'AMBULANCE':
      return 'Ambulance';
    case 'Fdny fire':
      return 'FDNY Fire';
    case 'FORKLIFT':
      return 'Forklift';
    default:
      return vehicle;
  }
};
