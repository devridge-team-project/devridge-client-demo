const { REACT_APP_SERVER_URL: origin } = process.env;
export const http = {
  get: function get<Response = unknown>(url: string): Promise<Response> {
    return fetch(origin + url).then((response) => response.json());
  },
  post: function post<Response = unknown>(url: string, body: unknown): Promise<Response> {
    return fetch(origin + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  },
};
