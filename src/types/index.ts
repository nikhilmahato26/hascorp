export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury' | '7-Seater' | 'MUV';
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'CNG' | 'Electric';
  seats: number | string;
  image?: string;
  pricePerDay?: number | string;
  featured?: boolean;
  features?: string[];
}

export interface BookingEnquiry {
  fullName: string;
  phoneNumber: string;
  vehicleType?: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation?: string;
  notes?: string;
}
