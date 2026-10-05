import { Vehicle } from '../types';

/**
 * HASCORP SELF DRIVE CARS - Centralized Fleet Inventory
 */
export const vehicles: Vehicle[] = [
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'MUV',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: '6/7',
    image: '/images/fleet/ertiga.jpg',
    pricePerDay: 'Available on Enquiry',
    featured: true,
    features: ['6/7 Seater MUV', 'Dual AC', 'Spacious Luggage Room', 'Comfortable Long Drives']
  },
  {
    id: 'mahindra-thar-roxx',
    name: 'Mahindra Thar Roxx',
    category: 'SUV',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 5,
    image: '/images/fleet/thar-roxx.jpg',
    pricePerDay: 'Available on Enquiry',
    featured: true,
    features: ['5-Door Thar Roxx', 'High Ground Clearance', 'Commanding Stance', 'Rugged All-Road Ability']
  },
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    category: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 5,
    image: '/images/fleet/seltos.jpg',
    pricePerDay: 'Available on Enquiry',
    featured: true,
    features: ['Automatic Transmission', 'Diesel Turbo Efficiency', 'Touchscreen Infotainment', 'Premium Interior']
  },
  {
    id: 'maruti-baleno',
    name: 'Maruti Suzuki Baleno',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    image: '/images/fleet/baleno.jpg',
    pricePerDay: 'Available on Enquiry',
    features: ['Premium Hatchback', 'Excellent Mileage', 'Spacious Cabin', 'Smooth Highway Drive']
  },
  {
    id: 'maruti-wagon-r',
    name: 'Maruti Suzuki Wagon R',
    category: 'Hatchback',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    image: '/images/fleet/wagonr.jpg',
    pricePerDay: 'Available on Enquiry',
    features: ['Tall Boy Comfort', 'High Mileage', 'Easy City Parking', 'Light Clutch & Steering']
  },
  {
    id: 'nissan-sunny',
    name: 'Nissan Sunny',
    category: 'Sedan',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    image: '/images/fleet/sunny.jpg',
    pricePerDay: 'Available on Enquiry',
    features: ['Best-in-Class Legroom', 'Huge Trunk Capacity', 'Plush Suspension', 'Ideal for Family Trips']
  }
];

export const vehicleCategories = [
  'All Vehicles',
  'SUV',
  'MUV',
  'Hatchback',
  'Sedan'
] as const;

