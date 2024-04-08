import httpRequest from "../axios";
import { CoffeeChat, CoffeeChatMessage, CoffeeChatReq } from "interface/CoffeeChat";
const api = httpRequest.server;

export const getCoffeeChatMessage = () => {
  return api.get<CoffeeChat[]>("api/coffee-chat");
};

export const getCoffeeChatMessageById = (id: number) => {
  return api.get<CoffeeChatMessage[]>(`api/coffee-chat/rooms/${id}`);
};

export const getCoffeeChatReq = (viewOption: "send" | "receive") => {
  return api.get<CoffeeChatReq>("api/coffee-chat/requests", { params: { viewOption } });
};

export const postCoffeeChat = (toMemberId: number, message: string) => {
  console.log(message);
  return api.post("api/coffee-chat/requests", { toMemberId, message });
};

export const patchCoffeeChatReq = (id: number, answer: string) => {
  return api.patch(`api/coffee-chat/requests/${id}`, { answer });
};
