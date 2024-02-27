import httpRequest from "../axios";

const api = httpRequest.server;

function postCodeVerifications(email: string, code: number | undefined) {
  return api.post(`/api/email-verifications/code?email=${email}&code=${code}`);
}

async function postEmailVerifications(email: string) {
  return api.post("/api/email-verifications", { email });
}

export const emailVerifications = {
  post: postEmailVerifications,
};

export const codeVerifications = {
  post: postCodeVerifications,
};
