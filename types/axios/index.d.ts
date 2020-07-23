type Method = "get" | "delete" | "head" | "options" | "post" | "put" | "patch";

type ResponseType = "arraybuffer" | "document" | "json" | "text" | "stream";

interface Object {
  [key: string]: any;
}

interface BaseRequestConfig {
  baseURL?: string;
  transformRequest?: (data: Object, headers: Object) => Object;
  transformResponse?: Array<(data: Object) => Object>;
  headers?: Object;
  params?: Object;
  paramsSerializer?: (params: Object) => string;
  data?: Object | string;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: (config: Object) => Promise<Response<any>>;
  auth?: {
    username: string;
    password: string;
  };
  responseType?: ResponseType;
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

type RequestConfig = BaseRequestConfig & {
  url: string;
  method?: Method;
};

export interface Response<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Object;
  config: Object;
  request: any;
}

type AliasMethod = <T>(
  url: string,
  config?: BaseRequestConfig
) => Promise<Response<T>>;

type AliasMethodWithData = <T>(
  url: string,
  data?: Object | string,
  config?: BaseRequestConfig
) => Promise<Response<T>>;

type AxiosInstance = {
  <T>(config: RequestConfig): Promise<Response<T>>;
  request: <T>(config: RequestConfig) => Promise<Response<T>>;
  get: AliasMethod;
  delete: AliasMethod;
  head: AliasMethod;
  options: AliasMethod;
  post: AliasMethodWithData;
  put: AliasMethodWithData;
  patch: AliasMethodWithData;
  defaults: Required<RequestConfig>;
  interceptors: {
    request: {
      use: (
        interceptor: (config: RequestConfig) => RequestConfig,
        errorHandler: (error: any) => Promise<any>
      ) => void;
    };
    response: {
      use: <T>(
        interceptor: (config: Response<T>) => Response<T>,
        errorHandler: (error: any) => Promise<any>
      ) => void;
    };
  };
};

type Axios = AxiosInstance & {
  create: (config: RequestConfig) => AxiosInstance;
  all: typeof Promise.all;
  spread: (callback: (...args: any[]) => any) => (responses: any[]) => any;
};

declare const axios: Axios;

export default axios;
