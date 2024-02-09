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
