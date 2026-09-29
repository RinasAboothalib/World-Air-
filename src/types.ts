export type TripType = 'round-trip' | 'one-way' | 'multi-city';
export type CabinClass = 'economy' | 'premium-economy' | 'business' | 'first';

export interface FlightInquiry {
  tripType: TripType;
  fromCity: string;
  fromCode: string;
  toCity: string;
  toCode: string;
  departureDate: string;
  returnDate?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
    students: number;
  };
  cabinClass: CabinClass;
  isStudentFare: boolean;
  notes?: string;
}

export interface Destination {
  id: string;
  city: string;
  country: string;
  airportCode: string;
  region: 'Asia' | 'Middle East' | 'Europe' | 'North America' | 'Australia';
  image: string;
  flag: string;
  flightTimeFromCMB: string;
  popularFor: string;
  tag?: string;
  typicalAirlines: string[];
}

export interface StudentDestination {
  country: string;
  flag: string;
  code: string;
  universitiesHub: string;
  baggageAllowance: string;
  popularIntakes: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  destination: string;
  flag: string;
  travelType: string;
  review: string;
  rating: number;
  date: string;
}

export interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  origin: string;
  destination: string;
  travelDate: string;
  passengers: number;
  travelType: 'flight' | 'student' | 'visa' | 'holiday';
  message: string;
}

export interface RouteNode {
  id: string;
  name: string;
  city: string;
  airport: string;
  country: string;
  flag: string;
  coordinates: [number, number]; // [longitude, latitude]
  time: string;
  distance: string;
  isHub?: boolean;
}

