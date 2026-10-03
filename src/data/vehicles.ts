import { Vehicle } from '../types';

/**
 * HASCORP SELF DRIVE CARS - Centralized Fleet Inventory
 * 
 * To add vehicles, add objects conforming to the Vehicle interface.
 * When this array is empty, the FleetSection automatically displays the
 * high-converting "Check Availability" enquiry portal per client specifications.
 */
export const vehicles: Vehicle[] = [
  /*
  // Example of adding a vehicle once models & pricing are confirmed:
  {
    id: 'creta-2024',
    name: 'Hyundai Creta',
    category: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 5,
    image: '/images/fleet/creta.png',
    pricePerDay: 'Available on enquiry',
    features: ['Sunroof', 'Touchscreen Infotainment', 'Cruise Control', 'Push Button Start']
  },
  {
    id: 'swift-2024',
    name: 'Maruti Suzuki Swift',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    image: '/images/fleet/swift.png',
    pricePerDay: 'Available on enquiry',
    features: ['Bluetooth Audio', 'Air Conditioning', 'Power Windows', 'High Mileage']
  }
  */
];

export const vehicleCategories = [
  'All Vehicles',
  'Hatchback',
  'Sedan',
  'SUV',
  '7-Seater',
  'Luxury'
] as const;
