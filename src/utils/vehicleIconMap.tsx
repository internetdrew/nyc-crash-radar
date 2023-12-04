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
import { GiTowTruck } from 'react-icons/gi';
import { TbFiretruck } from 'react-icons/tb';
import { MdForklift } from 'react-icons/md';
import { MdCarCrash } from 'react-icons/md';

const iconClasses = 'mx-auto w-8 h-8';

export const iconMapping: Record<string, JSX.Element> = {
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
  Truck: <FaTruck className={iconClasses} />,
  'Garbage or Refuse': <HiTruck className={iconClasses} />,
  Moped: <PiMopedFront className={iconClasses} />,
  Motorcycle: <FaMotorcycle className={iconClasses} />,
  'Tow Truck / Wrecker': <GiTowTruck className={iconClasses} />,
  'Fdny fire': <TbFiretruck className={iconClasses} />,
  FORKLIFT: <MdForklift className={iconClasses} />,
};

export const DefaultVehicleIcon = () => {
  return <MdCarCrash className={iconClasses} />;
};
