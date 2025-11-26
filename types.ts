export interface Ingredient {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export interface BuildState {
  base: string | null;
  milk: string | null;
  extras: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  image: string;
  coordinates: string;
}

export enum Section {
  HERO = 'hero',
  MENU = 'menu',
  BUILDER = 'builder',
  AI = 'ai',
  ABOUT = 'about',
  ORIGINS = 'origins',
  SUBSCRIPTION = 'subscription',
  LOCATIONS = 'locations'
}