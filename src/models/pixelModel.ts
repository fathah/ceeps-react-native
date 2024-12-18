import SecretKeys from '@/constants/keys';
import AxiosService from '@/services/AxiosService';
import {PixelImage} from '@/types/images';

export default class PixelModel {
  static readonly API_ROOT: string = 'https://api.pexels.com/v1/';

  static async searchImages(
    query: string,
    count: number = 10,
    page: number = 1,
  ): Promise<PixelImage[]> {
    try {
      if (query.length < 1) {
        return [];
      }
      const axios = AxiosService.getInstance(PixelModel.API_ROOT);
      const resp = await axios
        .getAxiosInstance()
        .get(`search?query=${query}&per_page=${count}&page=${page}`, {
          headers: {
            Authorization: SecretKeys.PEXELS_API,
          },
        });
      if (resp.status !== 200) {
        console.error('Failed to load images:', resp);
        return [];
      }
      const images = resp?.data?.photos;
      if (images?.length > 0) {
        return images.map((image: any) => {
          return {
            url: image.src.large,
            height: image.height,
            width: image.width,
            thumbnail: image.src.medium,
            originalImage: image.src.original,
          };
        });
      }
      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
