import data from './placeholder-images.json';

type Spec = {
  label: {
    ar: string;
    en: string;
  };
  value: string;
};

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
  detailedDescription: {
    ar: string;
    en: string;
  };
  specs: Spec[];
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
