import Axios from "axios";

const axios = Axios.create();

const httpRequest = {
  get: function <Response = unknown>(url: string) {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: function <Request = any, Response = unknown>(url: string, data?: Request) {
    return axios.post<Response>(url, { data }).then((res) => res.data);
  },
};

export default httpRequest;
