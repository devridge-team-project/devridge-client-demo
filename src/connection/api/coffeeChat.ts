import httpRequest from "../axios";
import { CoffeeChat, CoffeeChatMessage, CoffeeChatReq } from "interface/CoffeeChat";
const api = httpRequest.server;

export const getCoffeeChatMessage = () => {
  return api.get<CoffeeChat[]>("api/coffee-chat");
};

export const getCoffeeChatMessageById = (id: number) => {
  return api.get<CoffeeChatMessage[]>(`api/coffee-chat/${id}`);
};

export const getCoffeeChatReq = (viewOption: "send" | "receive") => {
  return api.get<CoffeeChatReq>("api/coffee-chat/request", { params: { viewOption } });
};

export const patchCoffeeChatReq = (id: number, answer: string) => {
  return api.patch(`api/coffee-chat/request/${id}`, { answer });
};
