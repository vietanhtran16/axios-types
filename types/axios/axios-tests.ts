import axios from "axios";

const url = "/blah";

(async () => {
  const { config, data, headers, request, status, statusText } = await axios({
    method: "get",
    url,
  });

  await axios.request({ url, method: "head" });

  await axios.get(url, { params: { id: 1 } });

  axios.defaults.baseURL = "https://api.example.com";
  axios.defaults.headers.common["Authorization"] = "token";
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
})();
