type Method = "get" | "delete" | "head" | "options" | "post" | "put" | "patch";

type ResponseType = "arraybuffer" | "document" | "json" | "text" | "stream";

interface Object {
  [key: string]: any;
}

interface RequestConfig {
  url: string;
  baseURL?: string;
  method?: Method;
  transformRequest?: (data: Object, headers: Object) => Object;
  transformResponse?: Array<(data: Object) => Object>;
  headers?: Object;
  params?: Object;
  paramsSerializer?: (params: Object) => string;
  data?: Object | string;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: (config: any) => Promise<{}>;
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

type AliasMethodRequestConfig = Omit<RequestConfig, "url" | "method">;

type RequiredRequestConfig = Required<RequestConfig>;

interface Response {
  data: Object;
  status: number;
  statusText: string;
  headers: Object;
  config: Object;
  request: any;
}

type AliasMethod = (
  url: string,
  config?: AliasMethodRequestConfig
) => Promise<Response>;

type AliasMethodWithData = (
  url: string,
  data?: Object | string,
  config?: AliasMethodRequestConfig
) => Promise<Response>;

type AxiosInstance = Omit<Axios, "create">;

type Axios = {
  (config: RequestConfig): Promise<Response>;
  create: (config: RequestConfig) => AxiosInstance;
  request: (config: RequestConfig) => Promise<Response>;
  get: AliasMethod;
  delete: AliasMethod;
  head: AliasMethod;
  options: AliasMethod;
  post: AliasMethodWithData;
  put: AliasMethodWithData;
  patch: AliasMethodWithData;
  all: (
    requests: Array<Promise<Response>>
  ) => Promise<Response[]>;
  spread: (callback: (...args: any) => any) => (responses: Response[]) => any;
  defaults: RequiredRequestConfig;
};

declare const axios: Axios;

export default axios;
