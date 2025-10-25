import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: {
    ar: string;
    en: string;
  };
  imageUrl: string;
  imageHint: string;
  generation: string;
  model: string;
  year: number | string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

    