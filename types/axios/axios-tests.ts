import axios, { Response } from "axios";

const url = "/blah";
interface Data {
  id: number, 
  name: string
}

(async () => {
  const { config, data: { id, name }, headers, request, status, statusText } = await axios<Data>({
    method: "get",
    url,
  });
})();

(async () => {
  const { data: { id, name } } = await axios.request<Data>({ url, method: "head" });
})();

(async () => {
  const { data: { id, name } } = await axios.get<Data>(url, { params: { id: 1 } });
})();

(async () => {
  const { data: { id, name } } =  await axios.post<Data>(url, { id: 1 }, { responseType: "arraybuffer" });
})();

const axiosInstance = axios.create({ url });
axiosInstance.defaults.data = { id: 10 };
axiosInstance.post<Data>(url)
  .then(result => result.data.id && result.data.name);

axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = "token";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function getUserAcc() {
  return axios.get<{name: string}>(url);
}

function getUserPermissions() {
  return axios.get<{id: number}>("/user/12345/permission");
}

axios.all([getUserAcc(), getUserPermissions()]).then(axios.spread(function (acct, perms) {
  
}));

axios.interceptors.request.use(function (config) {
  config.timeout = 10000;
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use<Data>(function (response) {
  response.data.id = 10000;
  return response;
}, function (error) {
  return Promise.reject(error);
});