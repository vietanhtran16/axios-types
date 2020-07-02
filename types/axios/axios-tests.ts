import axios from "axios";

const url = "/blah";

(async () => {
  const { config, data, headers, request, status, statusText } = await axios({
    url,
  });

  await axios.request({ url });

  await axios.get(url, { params: { id: 1 } });
})();
