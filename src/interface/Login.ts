export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  body: {
    accessToken: string;
    status: number;
  };
}
