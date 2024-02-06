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

export interface PasswordRequest {
  password: string;
}

export interface EmailRequest {
  email: string;
}

export interface CodeRequest {
  email: string;
  code: string;
}
