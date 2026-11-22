export interface RoomItem {
  id: string;
  slug: string;
  title: string;
  category: 'room' | 'suite' | 'villa';
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  pricePerNight: number;
  formattedPrice: string;
  capacity: string;
  maxGuests: number;
  bedType: string;
  roomSize: string;
  view: string;
  badge?: string;
  mainImage: string;
  galleryImages: string[];
  amenities: string[];
  highlights: string[];
  features: {
    wifi: boolean;
    breakfastIncluded: boolean;
    airConditioning: boolean;
    poolAccess: boolean;
    balcony: boolean;
    bathtube: boolean;
    miniBar: boolean;
    roomService: boolean;
  };
}

export interface AmenityItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'rooms' | 'pool' | 'dining' | 'landscapes' | 'amenities';
  imageUrl: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  guestName: string;
  location: string;
  avatar: string;
  rating: number;
  stayDate: string;
  roomStayed: string;
  quote: string;
}

export interface BookingSearchParams {
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  roomsCount: number;
}

export interface BookingReservationData {
  id: string;
  roomTitle: string;
  guestName: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  nightsCount: number;
  guestsCount: number;
  totalAmount: number;
  specialRequests?: string;
  createdAt: string;
}
