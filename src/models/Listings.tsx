import { DocumentData } from "firebase/firestore";

export interface Listings {
  id: string;
  data: DocumentData;
}

export interface ListingData {
  bathrooms: number;
  bedrooms: number;
  furnished: boolean;
  latitude: number;
  longitude: number;
  name: string;
  offer: boolean;
  parking: boolean;
  regularPrice: number;
  email?: string;
  location?: string;
  images?: [];
  address?: string;
  type: string;
  userRef?: string;
  discountedPrice?: number;
}

export interface ListingsProps {
  bathrooms: number;
  bedrooms: number;
  furnished: boolean;
  geolocation: {
    lat: number;
    lng: number;
  };
  name: string;
  offer: boolean;
  parking: boolean;
  regularPrice: number;
  email?: string;
  location?: string;
  imgUrls?: [];
  address?: string;
  type: string;
  userRef?: string;
  discountedPrice?: number;
}
