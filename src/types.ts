/**
 * Global TypeScript definitions for Auto Prime Oficina & Estética.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  tag: string;
  tagColor: string;
  image: string;
}

export interface PackageItem {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  tag: string;
  image: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
