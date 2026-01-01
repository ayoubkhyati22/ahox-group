import { useState, useEffect } from 'react';
import imageData from '../data/images.json';

export interface ImageAsset {
  id?: string;
  url: string;
  alt: string;
}

export interface ImageData {
  logos: {
    mainWhite: string;
    mainColor: string;
    construction: string;
    realEstate: string;
    security: string;
  };
  hero: {
    slides: ImageAsset[];
  };
  cities: {
    [key: string]: {
      hero: string;
      thumbnail: string;
      alt: string;
    };
  };
  construction: {
    hero: string;
    gallery: ImageAsset[];
  };
  realEstate: {
    hero: string;
    gallery: ImageAsset[];
  };
  security: {
    hero: string;
    consulting: string;
  };
}

export const useImages = () => {
  const [images] = useState<ImageData>(imageData as ImageData);

  return images;
};

// Helper function to get a specific image
export const getImage = (category: string, key: string): string => {
  const data = imageData as any;
  return data[category]?.[key] || '';
};

// Helper function to get city images
export const getCityImage = (city: string, type: 'hero' | 'thumbnail' = 'hero'): string => {
  const data = imageData as any;
  return data.cities?.[city]?.[type] || '';
};

// Helper function to get logo
export const getLogo = (type: 'mainWhite' | 'mainColor' | 'construction' | 'realEstate' | 'security'): string => {
  const data = imageData as any;
  return data.logos?.[type] || '';
};

export default useImages;