interface RequestConfig {
    url: string,
    baseURL?: string,
    method?: string,
    transformRequest?: (data: any, headers: any) => {},
    transformResponse?: Array<(data: any) => {}>,
    headers?: { [key: string]: any; },
    params?: { [key: string]: any; },
    paramsSerializer?: (params: any) => string,
    data?: { [key: string]: any; } | string,
    timeout?: number,
    withCredentials?: boolean,
    adapter?: (config: any) => Promise<{}>,
    auth?: {
        username: string,
        password: string,
    }
    responseType?: string,
    responseEncoding?: string,
    xsrfCookieName?: string,
    xsrfHeaderName?: string,
    onUploadProgress?: (progressEvent: any) => void,
    onDownloadProgress?: (progressEvent: any) => void,
    maxContentLength?: number,
    maxBodyLength?: number,
    validateStatus?: (status: number) => boolean,
    maxRedirects?: number,
    socketPath?: string,
    httpAgent?: any,
    httpsAgent?: any,
    proxy?: {
        host: string,
        port: number,
        auth: {
            username: string,
            password: string
        }
    },
    cancelToken?: any,
    decompress?: boolean
}

interface AxiosResponse {
    data: { [key: string]: any; };
    status: number;
    statusText: string;
    headers: { [key: string]: any; };
    config: { [key: string]: any; };
    request: any
}


export default function axios(config: RequestConfig): Promise<AxiosResponse>;


/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    function foo(): void;
}
