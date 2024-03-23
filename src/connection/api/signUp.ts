import httpRequest from "../axios";
const api = httpRequest.server;

interface CreateTokenProp {
  tempJwt: string;
}

function createToken(provider: string, code: string) {
  return api.post<Request, CreateTokenProp>("/api/social-login", { provider, code });
}

function signUpAuth(data: any) {
  return api.post("/social-login/signUp", data);
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
