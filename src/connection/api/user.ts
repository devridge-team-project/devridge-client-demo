import httpRequest from "../axios";

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

function postUser(data: SignUpRequest) {
  return httpRequest.post("/api/users", data);
}

export const user = {
  post: postUser,
};
