export const formatVehicle = (vehicle: string) => {
  switch (vehicle) {
    case 'Station Wagon/Sport Utility Vehicle':
      return 'Station Wagon/SUV';
    default:
      return vehicle;
  }
};
