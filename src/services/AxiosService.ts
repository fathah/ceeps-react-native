import axios, {AxiosInstance} from 'axios';

class AxiosService {
  // eslint-disable-next-line no-use-before-define
  private static instance: AxiosService;

  private axiosInstance: AxiosInstance;

  private constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        // Add other default headers here if needed
      },
    });
  }

  public static getInstance(baseURL: string): AxiosService {
    if (!AxiosService.instance) {
      AxiosService.instance = new AxiosService(baseURL);
    }
    return AxiosService.instance;
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default AxiosService;
