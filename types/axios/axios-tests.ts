import axios from "axios";

const url = "/blah";

(async () => {
  const { config, data, headers, request, status, statusText } = await axios({
    method: "get",
    url,
  });

  await axios.request({ url, method: "head" });

  await axios.get(url, { params: { id: 1 } });
  await axios.post(url, { id: 1 }, { responseType: "arraybuffer" });
})();

const axiosInstance = axios.create({ url });
axiosInstance.defaults.data = { id: 10 };
axiosInstance.post(url);

axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = "token";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function getUserAcc() {
  return axios.get(url);
}

function getUserPermissions() {
  return axios.get("/user/12345/permission");
}

axios.all([getUserAcc(), getUserPermissions()]).then(axios.spread(function (acct, perms) {
  // Both requests are now complete
}));
