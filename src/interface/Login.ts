export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  code: number;
  message: string;
  body: {
    accessToken: string;
  };
}

export interface CodeRequest {
  email: string;
  code: string;
}
