export interface PixelImage {
  url: string;
  height: number;
  width: number;
  thumbnail: string;
  originalImage: string;
}

export type PixelImagePayload = {
  query: string;
  count: number;
  callback: () => void;
};
