export type EventType = 'theater' | 'concert';

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  venue: string;
  address: string;
  city: string;
  date: string;
  time: string;
  price: number;
  image: string;
  availableSeats: number;
}

export interface Booking {
  id: string;
  eventId: string;
  eventTitle: string;
  date: string;
  seats: string[];
  totalPrice: number;
  qrCode: string;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  capacity: number;
  address: string;
}

export interface Showtime {
  id: string;
  eventId: string;
  eventTitle: string;
  date: string;
  time: string;
  price: number;
  venueId: string;
}

export type SeatStatus = 'available' | 'selected' | 'booked';

export interface Seat {
  row: string;
  number: number;
  status: SeatStatus;
}