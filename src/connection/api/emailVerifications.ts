import httpRequest from "../axios";

function postCodeVerifications(email: string, code: number | undefined) {
  return httpRequest.post(`/api/email-verifications/code?email=${email}&code=${code}`);
}

async function postEmailVerifications(email: string) {
  return httpRequest.post("/api/email-verifications", { email });
}

export const emailVerifications = {
  post: postEmailVerifications,
};

export const codeVerifications = {
  post: postCodeVerifications,
};
