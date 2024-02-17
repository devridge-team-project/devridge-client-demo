export interface SignUpRequest {
  email: string;
  password: string;
  provider: string;
  nickname: string;
  introduction: string;
  profileImageUrl: string | null;
  skillIds: number[];
  occupationId: number;
}

export interface UserDetails {
  id: number;
  nickname: string;
  imageUrl: string | null;
  introduction: string;
  skillIds: number[];
  occupation: string;
}
