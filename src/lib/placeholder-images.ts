import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: {
    ar: string;
    en: string;
  };
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
