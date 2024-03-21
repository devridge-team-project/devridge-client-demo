export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: null | string;
  introduction: string;
}

export interface LastMessage {
  message: string;
  createdAt: string;
  updateAt: string;
}

export interface CoffeeChat {
  id: number;
  member: Member;
  lastMessage: LastMessage;
}

export interface CoffeeChatMessage {
  id: number;
  member: Member;
  message: string;
  createdAt: string;
  updateAt: string;
}

export interface CoffeeChatRequest {
  id: number;
  member: Member;
  message: string;
  status: string;
}

export interface CoffeeChatReq {
  coffeeChatRequests: CoffeeChatRequest[] | undefined;
  noReadCount: number;
}
