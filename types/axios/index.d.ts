interface RequestConfig {
  url: string;
  baseURL?: string;
  method?: string;
  transformRequest?: (data: any, headers: any) => {};
  transformResponse?: Array<(data: any) => {}>;
  headers?: { [key: string]: any };
  params?: { [key: string]: any };
  paramsSerializer?: (params: any) => string;
  data?: { [key: string]: any } | string;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: (config: any) => Promise<{}>;
  auth?: {
    username: string;
    password: string;
  };
  responseType?: string;
  responseEncoding?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  maxBodyLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  socketPath?: string;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: {
    host: string;
    port: number;
    auth: {
      username: string;
      password: string;
    };
  };
  cancelToken?: any;
  decompress?: boolean;
}

type OptionalUrlRequestConfig = Omit<RequestConfig, "url">;

interface AxiosResponse {
  data: { [key: string]: any };
  status: number;
  statusText: string;
  headers: { [key: string]: any };
  config: { [key: string]: any };
  request: any;
}

declare function axios(config: RequestConfig): Promise<AxiosResponse>;

declare namespace axios {
  var request: (config: RequestConfig) => Promise<AxiosResponse>;
  var get: (
    url: string,
    config?: OptionalUrlRequestConfig
  ) => Promise<AxiosResponse>;
  var head: (
    url: string,
    config?: OptionalUrlRequestConfig
  ) => Promise<AxiosResponse>;
}

export default axios;
