import Axios from "axios";

const { REACT_APP_SERVER_URL: origin } = process.env;
const axios = Axios.create({
  baseURL: origin,
});

const httpRequest = {
  get: function <Response = unknown>(url: string, config?: object) {
    return axios.get<Response>(url, config).then((res) => res.data);
  },
  post: function <Request = any, Response = unknown>(url: string, data?: Request) {
    return axios.post<Response>(url, { data }).then((res) => res.data);
  },
};

export default httpRequest;
