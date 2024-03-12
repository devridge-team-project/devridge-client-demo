import httpRequest from "../axios";
const api = httpRequest.server;

interface CreateTokenProps {
  tempJwt: string;
}

function createToken(provider: string, code: string) {
  return api.post<Request, CreateTokenProps>("/api/social-login", { provider, code });
}

function signUpAuth() {
  return api.post("/auth/signUp");
}

const signUp = {
  auth: {
    token: {
      post: createToken,
    },
    post: signUpAuth,
  },
};

export default signUp;
