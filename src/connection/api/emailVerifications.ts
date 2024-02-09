import httpRequest from "../axios";

function getEmailVerifications(email: string, code: number | undefined) {
  return httpRequest.get("/api/email-verifications", { params: { email: email, code: code } });
}

async function postEmailVerifications(email: string) {
  return httpRequest.post("/api/email-verifications", { email });
}

export const emailVerifications = {
  get: getEmailVerifications,
  post: postEmailVerifications,
};
